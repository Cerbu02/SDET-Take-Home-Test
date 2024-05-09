import { test, expect, ElementHandle } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^\$29\.99ADD TO CART$/ })
    .getByRole("button")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^\$9\.99ADD TO CART$/ })
    .getByRole("button")
    .click();
  await page.locator("#shopping_cart_container").getByRole("link").click();

  const itemNames = await page.$$eval(".inventory_item_name", (items) =>
    items.map((item) => item.textContent?.trim())
  );

  expect(itemNames).toContain("Sauce Labs Backpack");
  expect(itemNames).toContain("Sauce Labs Bike Light");

  await page.getByRole("link", { name: "CHECKOUT" }).click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("first name");
  await page.locator('[data-test="firstName"]').press("Tab");
  await page.locator('[data-test="lastName"]').fill("last name");
  await page.locator('[data-test="lastName"]').press("Tab");
  await page.locator('[data-test="postalCode"]').fill("800100");
  await page.getByRole("button", { name: "CONTINUE" }).click();
  await page.getByRole("link", { name: "FINISH" }).click();
});
