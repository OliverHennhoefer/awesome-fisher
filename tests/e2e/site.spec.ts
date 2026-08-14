import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home exposes search and all five browsing pillars', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('One index');
  await expect(page.getByRole('searchbox')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Browse by field' }).getByRole('link')).toHaveCount(5);
});

test('the contribution index filters by alias and difficulty', async ({ page }) => {
  await page.goto('./contributions/');
  await page.getByLabel('Title, alias, or summary').fill('ANOVA');
  await expect(page.locator('.index-row:visible')).toHaveCount(1);
  await expect(page.locator('.index-row:visible')).toContainText('Analysis of variance');
  await page.getByLabel('Title, alias, or summary').fill('');
  await page.getByLabel('Difficulty').selectOption('advanced');
  await expect(page.locator('.index-row:visible')).toHaveCount(5);
});

test('signature calculations respond to input', async ({ page }) => {
  await page.goto('./contributions/fishers-method/');
  await page.getByLabel('P-values').fill('0.05');
  await expect(page.locator('#method-result')).toHaveText('0.0500');

  await page.goto('./contributions/fishers-exact-test/');
  await expect(page.locator('#exact-result')).toHaveText('0.0350');
  await page.getByLabel('Treatment / outcome').fill('3');
  await page.getByLabel('Treatment / no outcome').fill('1');
  await page.getByLabel('Control / outcome').fill('1');
  await page.getByLabel('Control / no outcome').fill('3');
  await expect(page.locator('#exact-result')).toHaveText('0.4857');
});

test('keyboard search shortcut and deep links work', async ({ page }) => {
  await page.goto('./contributions/sufficiency/');
  await page.keyboard.press('Control+K');
  await expect(page).toHaveURL(/\/awesome-fisher\/search\/$/);
  await expect(page.getByRole('heading', { name: 'Search', level: 1 })).toBeVisible();
});

test('articles retain their content without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/awesome-fisher/contributions/fishers-exact-test/');
  await expect(page.getByRole('heading', { name: 'Fisher’s exact test', level: 1 })).toBeVisible();
  await expect(page.getByText('For the table [[8, 2], [1, 5]]')).toBeVisible();
  await context.close();
});

test('the GitHub Pages custom 404 document is available', async ({ page }) => {
  await page.goto('./404.html');
  await expect(page.getByRole('heading', { name: 'This path contains no evidence.' })).toBeVisible();
});

test('core pages have no automatically detectable accessibility violations', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'Run the full accessibility scan once on desktop.');
  for (const route of ['./', './contributions/', './contributions/fishers-exact-test/', './context/eugenics-and-legacy/']) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, route).toEqual([]);
  }
});

test('mobile pages do not overflow horizontally', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Mobile-only layout check.');
  for (const route of ['./', './contributions/', './contributions/fisher-information-and-score/']) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow, route).toBe(false);
  }
});
