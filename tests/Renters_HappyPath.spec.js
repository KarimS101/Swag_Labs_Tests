// @ts-check
import { test, expect } from '@playwright/test';
import welcomePage from '../Pages/WelcomePage';
import enterCustomerDetailsPage from '../Pages/EnterCustomerDetails';
import creditNoHitPage from '../Pages/creditNoHit';
import myAccontHomePage from '../Pages/myAccountHomePage';

/*
test('Renters Happy path', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageNavigation()
    
    const customerDetails = new enterCustomerDetailsPage(page)
    await customerDetails.enterHappyPathCustomerDetails()

    const creditNoHit = new creditNoHitPage(page)
    await creditNoHit.validateCreditNoHit()


})

*/

test('MyAccount Login Link Launches MyAccount Window', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.myAccountLink()

    const myaccount = new myAccontHomePage(page)
    await myaccount.validateMyAccountHomePage()



})


test('Cannot start a quote with Renter/Home', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome', { waitUntil: 'load' })

    const welcome = new welcomePage(page)
    await welcome.welcomePageRenterHomeError()


})

test('Cannot start a quote with Renter/Condo', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome', { waitUntil: 'load' })

    const welcome = new welcomePage(page)
    await welcome.welcomePageRenterCondoError()


})

test('Cannot start a quote without entering ZIP', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome', { waitUntil: 'load' })

    const welcome = new welcomePage(page)
    await welcome.enterYourZipErrorMessage()


})

test('Cannot start a quote without seleting a product', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome', { waitUntil: 'load' })

    const welcome = new welcomePage(page)
    await welcome.welcomePageAtLeaseOneProducterror()


})

