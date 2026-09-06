import { expect, test } from "@playwright/test";

test("shows workshop identity before live data arrives", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Tripy 2\.0/);
  await expect(page.getByRole("heading", { name: /Tripy 2\.0/ })).toBeVisible();
});
