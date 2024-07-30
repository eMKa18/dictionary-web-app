// @ts-check
import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("link navigates to main page", async ({ page }) => {
    await page.getByRole("link", { name: "Logo" }).click();

    await expect(page).toHaveTitle(/Dictionary Web App/);
  });

  test("dropdown shows 3 options of fonts", async ({ page }) => {
    await page.getByRole("button", { name: "Serif" }).click();

    const options = ["Serif", "Sans", "Mono"];
    for (const option of options)
      await expect(page.getByRole("listitem", { name: option })).toBeVisible();
  });

  test("dropdown changes value after clicking on one of the options", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Serif" }).click();
    await page.getByRole("listitem", { name: "Mono" }).click();

    await expect(page.getByRole("button", { name: "Mono" })).toBeVisible();
  });
});
