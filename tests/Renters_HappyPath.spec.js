// @ts-check
import { test, expect } from '@playwright/test';
import welcomePage from '../Pages/WelcomePage';
import enterCustomerDetailsPage from '../Pages/EnterCustomerDetails';

//Turning this Test off due to reliability issues with website
/*
test('Renters Happy path', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageNavigation()
    
    const customerDetails = new enterCustomerDetailsPage(page)
    await customerDetails.enterHappyPathCustomerDetails()


})
*/

test('Cannot start a quote with Renter/Home', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageRenterHomeError()


})

test('Cannot start a quote with Renter/Condo', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageRenterCondoError()


})

test('Cannot start a quote without entering ZIP', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.enterYourZipErrorMessage()


})

test('Cannot start a quote without seleting a product', async ({ page }) => {
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.welcomePageAtLeaseOneProducterror()


})
