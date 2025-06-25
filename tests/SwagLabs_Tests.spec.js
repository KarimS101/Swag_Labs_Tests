// @ts-check
import { test, expect } from '@playwright/test';
import SwagLabs_Login from '../Pages/SwagLabs_Login';
import loginPage from '../Pages/SwagLabs_Login';

test('Validate Login Error when no username or password is entered and login is selected', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new loginPage(page)
    await login.validateErrorOnLogin()
  });

  test('Validate LockedOut user error', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new loginPage(page)
    await login.valitateLockedUser()
  });


