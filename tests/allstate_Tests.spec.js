// @ts-check
import { test, expect } from '@playwright/test';
import welcomePage from '../Pages/WelcomePage';
import enterCustomerDetailsPage from '../Pages/EnterCustomerDetails';
import creditNoHitPage from '../Pages/creditNoHit';
import myAccountHomePage from '../Pages/myAccountHomePage';
import myAccountCreateAccountPage from '../Pages/myAccountCreateAccountPage';



/*
-- Commenting out this TC due to flaky issue with allstate.com --

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

test('MyAccount - Attempt to Login with invalid username and Password - validate Error', async ({ page }) => {

    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.myAccountLink()

    const [newPage] = await Promise.all([
        page.waitForEvent("popup") 

    ]
    )

    newPage.waitForLoadState("domcontentloaded")
    const myaccount = new myAccountHomePage(newPage)
    await myaccount.validateMyAccountLoginError()

})


test('MyAccount - Attempt to Register an indivudal account leaving required fields blank  - Validate Error', async ({page}) =>{
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.myAccountLink()

    const [newPage] = await Promise.all([
        page.waitForEvent("popup") 

    ]
    )

    newPage.waitForLoadState("domcontentloaded")
    const myaccount = new myAccountHomePage(newPage)
    await myaccount.clickRegisterLink()

    const createAccount = new myAccountCreateAccountPage(newPage)
    await createAccount.validateCreateAccountErrorIndividual()


})



test('MyAccount - Attempt to Register an Business account leaving required fields blank  - Validate Error', async ({page}) =>{
    await page.goto('https://purchase.allstate.com/onlineshopping/welcome')

    const welcome = new welcomePage(page)
    await welcome.myAccountLink()

    const [newPage] = await Promise.all([
        page.waitForEvent("popup") 

    ]
    )

    newPage.waitForLoadState("domcontentloaded")
    const myaccount = new myAccountHomePage(newPage)
    await myaccount.clickRegisterLink()

    const createAccount = new myAccountCreateAccountPage(newPage)
    await createAccount.validateCreateAccountErrorBusiness()


})


