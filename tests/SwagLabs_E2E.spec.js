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
    await inventoryMenu.selectBackPack()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1') // Backpack added
    await inventoryMenu.selectShoppingCartContainer()

    const shoppingCart = new SwagLabs_Cart(page)
    await shoppingCart.checkOut()

    const checkOut = new SwagLabs_Checkout(page)
    await checkOut.enterValidDetailsAndContinue()

    const checkOutComplete = new SwagLabs_Overview(page)
    await checkOutComplete.finishCheckout()

    const logOut = new SwagLabs_InventoryMenu(page)
    await logOut.validateInvenoryPage()
    await logOut.logOut()



  });

  test('E2E Test - Purchase 2 items Backpack and Bikelight successfully and log out', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new SwagLabs_Login(page)
    await login.validUserLogin()

    const inventoryMenu = new SwagLabs_InventoryMenu(page)
    await inventoryMenu.validateInvenoryPage()
    await inventoryMenu.selectBackPack()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1') // Backpack added
    await inventoryMenu.selectBackToProducts()
    await inventoryMenu.selectBikeLight()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2') // Bikelight added

    await inventoryMenu.selectShoppingCartContainer()

    const shoppingCart = new SwagLabs_Cart(page)
    await shoppingCart.checkOut()

    const checkOut = new SwagLabs_Checkout(page)
    await checkOut.enterValidDetailsAndContinue()

    const checkOutComplete = new SwagLabs_Overview(page)
    await checkOutComplete.finishCheckout()

    const logOut = new SwagLabs_InventoryMenu(page)
    await logOut.validateInvenoryPage()
    await logOut.logOut()

  }); 



