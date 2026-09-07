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

test("student page allows tier filtering and hiding completed questions", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("E1 — Hello print")).toBeVisible();

  // Filter to Hard
  await page.getByRole("button", { name: "Hard", exact: true }).click();
  await expect(page.getByText("H1 — Full menu calc")).toBeVisible();
  await expect(page.getByText("E1 — Hello print")).not.toBeVisible();

  // Back to All
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.getByText("E1 — Hello print")).toBeVisible();

  // Mark first question as done to hide it
  await page.getByRole("button", { name: "✓ Done" }).first().click();
  await expect(page.getByText("E1 — Hello print")).not.toBeVisible();
  await expect(page.getByText("Done hidden")).toBeVisible();

  // Toggle showing done questions
  await page.getByRole("button", { name: /Done hidden/ }).click();
  await expect(page.getByText("E1 — Hello print")).toBeVisible();
  await page.getByRole("button", { name: "Unhide" }).first().click();
  await expect(page.getByRole("button", { name: "✓ Done" }).first()).toBeVisible();
});
