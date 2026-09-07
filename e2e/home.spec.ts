import { expect, test } from "@playwright/test";

test("student page shows questions with no backend", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Tripy 2\.0/);
  await expect(page.getByRole("heading", { name: /Tripy 2\.0/ })).toBeVisible();
  await expect(page.getByText("HOW IT WORKS", { exact: true })).toBeVisible();
  await expect(page.getByText("Checking which days are open…")).toBeVisible();
  await expect(page.getByText("E1 — Hello print")).toBeVisible();
});

test("volunteer page shows standings and login", async ({ page }) => {
  await page.goto("/volunteer");
  await expect(page.getByText("LIVE STANDINGS")).toBeVisible();
  await expect(page.getByLabel("Volunteer / Admin login")).toBeVisible();
});
