import { test, expect } from '@playwright/test';

test('shows error hints if form is not correctly filled and search button is disabled', async ({ page }) => {
    await page.goto('http://localhost:4400/iframe.html?id=blocks-flight-criteria--basic&viewMode=story');

    await page.getByLabel('From').fill('Mu');
    await page.getByLabel('To').fill('Be');

    await page.getByRole('button', { name: 'Search' }).click({force: true});

    await expect(page.getByTestId('error-hint-from')).toHaveCount(1);
    await expect(page.getByTestId('error-hint-to')).toHaveCount(1);
    await expect(page.getByRole('button', { name: 'Search' })).toBeDisabled();
  });

test('shows no erros if form is entered correctly and search button is enabled', async ({ page }) => {
    await page.goto('http://localhost:4400/iframe.html?id=blocks-flight-criteria--basic&viewMode=story');

    await page.getByLabel('From').fill('Munich');
    await page.getByLabel('To').fill('Berlin');

    await page.getByRole('button', { name: 'Search' }).click();

    await expect(page.getByTestId('error-hint-from')).toHaveCount(0);
    await expect(page.getByTestId('error-hint-to')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Search' })).toBeEnabled();
  });

