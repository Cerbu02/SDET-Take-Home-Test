import { test, expect } from "@playwright/test";

test("Sort the product list by Price", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await page.getByRole("combobox").selectOption("lohi");

  interface Product {
    title: string;
    price: number;
  }
  const lohiSortedProducts: Product[] = [
    { title: "Sauce Labs Onesie", price: 7.99 },
    { title: "Sauce Labs Bike Light", price: 9.99 },
    { title: "Sauce Labs Bolt T-Shirt", price: 15.99 },
    { title: "Test.allTheThings() T-Shirt (Red)", price: 15.99 },
    { title: "Sauce Labs Backpack", price: 29.99 },
    { title: "Sauce Labs Fleece Jacket", price: 49.99 },
  ];

  const afterSortProducts: Product[] = await page.$$eval(
    ".inventory_item",
    (items: Element[]) =>
      items.map((item: Element) => ({
        title:
          (item.querySelector(".inventory_item_label > a") as HTMLAnchorElement)
            ?.textContent || "",
        price: parseFloat(
          (
            item.querySelector(".inventory_item_price") as HTMLElement
          )?.textContent?.replace(/\$/g, "") || "0"
        ),
      }))
  );

  for (let i = 0; i < lohiSortedProducts.length; i++) {
    expect(afterSortProducts[i].title).toBe(lohiSortedProducts[i].title);
    expect(afterSortProducts[i].price).toBe(lohiSortedProducts[i].price);
  }
  expect(afterSortProducts.length).toBe(lohiSortedProducts.length);
});
