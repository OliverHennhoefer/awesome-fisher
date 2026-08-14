import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('home exposes search and all five browsing pillars', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A field of consequences.');
  const searchbox = page.getByRole('searchbox');
  const fieldNavigation = page.getByRole('navigation', { name: 'Browse by field' });
  await expect(searchbox).toBeVisible();
  await expect(fieldNavigation.getByRole('link')).toHaveCount(5);
  const navigationTop = await fieldNavigation.evaluate((element) => element.getBoundingClientRect().top);
  await searchbox.fill('ANOVA');
  const results = page.getByRole('region', { name: 'Search results' });
  await expect(results).toBeVisible();
  await expect(results.getByRole('link', { name: /Analysis of variance/ })).toBeVisible();
  await expect(results).toHaveCSS('position', 'absolute');
  await expect.poll(() => fieldNavigation.evaluate((element) => element.getBoundingClientRect().top)).toBe(navigationTop);
});

test('the contribution index filters by alias and difficulty', async ({ page }) => {
  await page.goto('./contributions/');
  await page.getByLabel('Title, alias, or summary').fill('ANOVA');
  await expect(page.locator('.index-row:visible')).toHaveCount(1);
  await expect(page.locator('.index-row:visible')).toContainText('Analysis of variance');
  await page.getByLabel('Title, alias, or summary').fill('');
  await page.getByLabel('Difficulty').selectOption('advanced');
  const advancedCount = await page.locator('.index-row[data-difficulty="advanced"]').count();
  await expect(page.locator('.index-row:visible')).toHaveCount(advancedCount);
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

test('directional distribution renders its formal statement', async ({ page }) => {
  await page.goto('./contributions/directional-distributions/');
  await expect(page.getByRole('heading', { name: 'Formal statement', level: 2 })).toBeVisible();
  await expect(page.locator('.katex-display')).toHaveCount(1);
  await expect(page.locator('.katex-error')).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Worked example', level: 2 })).toBeVisible();
});

test('contribution navigation works from deep links', async ({ page }) => {
  await page.goto('./contributions/sufficiency/');
  await page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'Contributions' }).click();
  await expect(page).toHaveURL(/\/the-fisher-index\/contributions\/$/);
  await expect(page.getByLabel('Title, alias, or summary')).toBeVisible();
});

test('the works timeline exposes dated entries as links', async ({ page }, testInfo) => {
  await page.goto('./timeline/');
  await expect(page.getByRole('heading', { name: 'The work in time.', level: 1 })).toBeVisible();
  expect(await page.locator('.works-timeline-row').count()).toBeGreaterThan(40);
  await expect(page.locator('.works-timeline-scroll')).toHaveCSS('overflow-x', testInfo.project.name === 'mobile' ? 'auto' : 'clip');

  const anovaBar = page.locator('.works-timeline-bar[aria-label^="Analysis of variance,"]');
  await expect(anovaBar).toHaveCount(1);
  await expect(anovaBar).toHaveAttribute('href', /\/the-fisher-index\/contributions\/analysis-of-variance\/$/);
  await anovaBar.focus();
  await expect(anovaBar).toBeFocused();
  await expect(page.getByText('Fisher consistency')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Read the biography' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Browse the contribution index' })).toHaveCount(0);
});

test('the primary navigation promotes timeline before biography', async ({ page }) => {
  await page.goto('./timeline/');
  const primaryNav = page.getByRole('navigation', { name: 'Primary navigation' });
  const primaryLinks = primaryNav.getByRole('link');
  await expect(primaryLinks).toHaveText(['Contributions', 'Timeline', 'Biography', 'Context']);
  await primaryNav.getByRole('link', { name: 'Biography', exact: true }).click();
  await expect(page).toHaveURL(/\/the-fisher-index\/biography\/$/);
  await expect(page.getByRole('heading', { name: 'A life across disciplines.', level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore the works timeline' })).toHaveCount(0);
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('articles retain their content', async ({ page }) => {
    await page.goto('./contributions/fishers-exact-test/');
    await expect(page.getByRole('heading', { name: 'Fisher’s exact test', level: 1 })).toBeVisible();
    await expect(page.getByRole('spinbutton', { name: 'Treatment / outcome' })).toHaveValue('8');
    await expect(page.locator('#exact-result')).toHaveText('0.0350');
  });
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
  for (const route of ['./', './contributions/', './contributions/fisher-information-and-score/', './timeline/', './biography/']) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow, route).toBe(false);
  }
});
