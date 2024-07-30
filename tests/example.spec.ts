// @ts-check
import { test, expect } from "@playwright/test";

test.describe("page loads", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });
  test("link navigates to main page", async ({ page }) => {
    await page.getByRole("link", { name: "Logo" }).click();

    await expect(page).toHaveTitle(/Dictionary Web App/);
  });
});
