// @ts-check
import { test, expect } from "@playwright/test";

test.describe("page loads", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });
  test("dropdown shows options", async ({ page }) => {
    await page.getByRole("link", { name: "Logo" }).click();

    await expect(page.url()).toEqual("http://localhost:3000/");
  });
});
