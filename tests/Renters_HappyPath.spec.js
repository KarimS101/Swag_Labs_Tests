// @ts-check
import { test, expect } from '@playwright/test';
import welcomePage from '../Pages/WelcomePage';
import enterCustomerDetailsPage from '../Pages/EnterCustomerDetails';


test('Renters Happy path', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageNavigation()
    
    //const customerDetails = new enterCustomerDetailsPage(page)
    //await customerDetails.enterCustomerDetails()

})

test('Cannot start a quote with two properties', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageTwoPropertyError()


})