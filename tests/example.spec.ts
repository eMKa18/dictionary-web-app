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

  test("checks if darkmode switch works", async ({ page }) => {
    await expect(page.getByRole("checkbox")).not.toBeChecked();
    await page.getByLabel("darkmodeswitch").click();
    await expect(page.getByRole("checkbox")).toBeChecked();
  });

  test("checks if input will cause the content to show using keyboard's enter", async ({
    page,
  }) => {
    await page.getByPlaceholder("Search any word").fill("keyboard");
    await page.keyboard.press("Enter");
    await expect(page.getByRole("heading", { name: "keyboard" })).toBeVisible();
  });

  test("checks if input will cause the content to show using dedicated search button", async ({
    page,
  }) => {
    await page.getByPlaceholder("Search any word").fill("keyboard");
    await page.getByRole("button", { name: "Search" }).click();
    await expect(page.getByRole("heading", { name: "keyboard" })).toBeVisible();
  });
});
