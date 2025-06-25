// @ts-check
import { test, expect } from '@playwright/test';
import SwagLabs_Login from '../Pages/SwagLabs_Login';
import SwagLabs_InventoryMenu from '../Pages/SwagLabs_InventoryMenu';


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




