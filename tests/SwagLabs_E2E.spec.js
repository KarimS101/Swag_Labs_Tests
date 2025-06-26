// @ts-check
import { test, expect } from '@playwright/test';
import SwagLabs_Login from '../Pages/SwagLabs_Login';
import SwagLabs_InventoryMenu from '../Pages/SwagLabs_InventoryMenu';
import SwagLabs_Cart from '../Pages/SwagLabs_Cart'
import SwagLabs_Checkout from '../Pages/SwagLabs_Checkout'
import SwagLabs_Overview from '../Pages/SwagLabs_Overview'

test('E2E Test - Purchase 1 Backpack item successfully and log out', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validUserLogin()

    const inventoryMenu = new SwagLabs_InventoryMenu(page)
    await inventoryMenu.validateInvenoryPage()

    const backback = new SwagLabs_InventoryMenu(page)
    await backback.selectBackPack()

    const shoppingCart = new SwagLabs_Cart(page)
    await shoppingCart.checkOut()

    const checkOut = new SwagLabs_Checkout(page)
    await checkOut.enterValidDetailsAndContinue()

    const checkOutComplete = new SwagLabs_Overview(page)
    await checkOutComplete.finishCheckout()



  });

