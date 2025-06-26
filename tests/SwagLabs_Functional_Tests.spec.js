// @ts-check
import { test, expect } from '@playwright/test';
import SwagLabs_Login from '../Pages/SwagLabs_Login';
import SwagLabs_InventoryMenu from '../Pages/SwagLabs_InventoryMenu';

/*
test('Validate Login Error when no username or password is entered and login is selected', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validateErrorOnLogin()
  });

  test('Validate LockedOut user error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validateLockedUser()
  });

  test('Validate user can login successfully and log out', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validUserLogin()

    const inventoryMenu = new SwagLabs_InventoryMenu(page)
    await inventoryMenu.validateInvenoryPage()
    await inventoryMenu.logOut()

    const loginMenu = new SwagLabs_Login(page)
    await loginMenu.validateLoginPage()

  });


  test('Validate Price (low to high) sorting on inventory page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validUserLogin()

    const inventoryMenu = new SwagLabs_InventoryMenu(page)
    await inventoryMenu.validateInvenoryPage()

      // Apply the sort filter: "Price (low to high)"
  await inventoryMenu.selectSortOption("lohi");

  // Retrieve all item prices displayed
  //Finds all visible item prices on the page (.inventory_item_price).
  //Extracts and parses them into an array of numbers (e.g., [9.99, 15.99, 29.99, ...]).
  //Stores the current visual order of prices after sorting.
  const prices = await inventoryMenu.getAllItemPrices();

  // Clone and sort a copy to compare against original
  //Makes a copy of the prices array.
  //Uses .sort((a, b) => a - b) to sort the copy in ascending order.
  //compare the original order to a freshly sorted version, without mutating it.
  const sortedPrices = [...prices].sort((a, b) => a - b);

  // Assert original order matches expected sorted order
  //sserts that the visual order of prices on the page (prices) exactly matches the correct ascending order (sortedPrices).
  //if they're not the same, the test fails (fileter did not work)
  expect(prices).toEqual(sortedPrices);


  });

  */

  test('Validate Price (high to low) sorting on inventory page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validUserLogin()

    const inventoryMenu = new SwagLabs_InventoryMenu(page)
    await inventoryMenu.validateInvenoryPage()

      // Apply the sort filter: "Price (high to low)"
  await inventoryMenu.selectSortOption("hilo");

  // Retrieve all item prices displayed
  //Finds all visible item prices on the page (.inventory_item_price).
  //Extracts and parses them into an array of numbers (e.g., [29.99, 15.99, 9.99, ...]).
  //Stores the current visual order of prices after sorting.
  const prices = await inventoryMenu.getAllItemPrices();

  // Clone and sort a copy to compare against original
  //Makes a copy of the prices array.
  //Uses .sort((a, b) => a - b) to sort the copy in ascending order.
  //compare the original order to a freshly sorted version, without mutating it.
  const sortedPrices = [...prices].sort((a, b) => a + b);

  // Assert original order matches expected sorted order
  //sserts that the visual order of prices on the page (prices) exactly matches the correct ascending order (sortedPrices).
  //if they're not the same, the test fails (fileter did not work)
  expect(prices).toEqual(sortedPrices);


  });



