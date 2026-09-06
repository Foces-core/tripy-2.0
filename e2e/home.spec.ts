import { expect, test } from "@playwright/test";

test("student page shows questions with no backend", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Tripy 2\.0/);
  await expect(page.getByRole("heading", { name: /Tripy 2\.0/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Day 1" })).toBeVisible();
  await expect(page.getByText("3-Day Python Workshop", { exact: true })).toBeVisible();
});

test("live page shows standings and login", async ({ page }) => {
  await page.goto("/live");
  await expect(page.getByText("LIVE STANDINGS")).toBeVisible();
  await expect(page.getByLabel("Volunteer / Admin login")).toBeVisible();
});
