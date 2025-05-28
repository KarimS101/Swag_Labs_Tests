// @ts-check
import { test, expect } from '@playwright/test';
import welcomePage from '../Pages/WelcomePage';
import enterCustomerDetailsPage from '../Pages/EnterCustomerDetails';
import creditNoHitPage from '../Pages/creditNoHit';
import myAccountHomePage from '../Pages/myAccountHomePage';
import myAccountCreateAccountPage from '../Pages/myAccountCreateAccountPage';

const BASE_URL = 'https://purchase.allstate.com/onlineshopping/welcome';

test.describe('Quote Start Validation', () => {
    let welcome;
  
    test.beforeEach(async ({ page }) => {
      await page.goto(BASE_URL, { waitUntil: 'load' });
      welcome = new welcomePage(page);
    })

  test('Should not allow user to start a quote with Renter/Home selected', async () => {
    await welcome.welcomePageRenterHomeError();
  })

  test('Should not allow user to start a quote with Renter/Condo selected', async () => {
    await welcome.welcomePageRenterCondoError();
  })

  test('Should show user an error when ZIP is not entered', async () => {
    await welcome.enterYourZipErrorMessage();
  })

  test('Should show user an error when no product is selected', async () => {
    await welcome.welcomePageAtLeaseOneProducterror();
  })
})

test.describe('MyAccount Flow Validation', () => {
  async function navigateToMyAccountPage(page) {
    const welcome = new welcomePage(page);
    await page.goto(BASE_URL);
    await welcome.myAccountLink();

    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }

  test('Login with invalid credentials should show error', async ({ page }) => {
    const newPage = await navigateToMyAccountPage(page);
    const myaccount = new myAccountHomePage(newPage);
    await myaccount.validateMyAccountLoginError();
  })

  test('Register individual account with blank fields should show validation error', async ({ page }) => {
    const newPage = await navigateToMyAccountPage(page);
    const myaccount = new myAccountHomePage(newPage);
    await myaccount.clickRegisterLink();

    const createAccount = new myAccountCreateAccountPage(newPage);
    await createAccount.validateCreateAccountErrorIndividual();
  })

  test('Register business account with blank fields should show validation error', async ({ page }) => {
    const newPage = await navigateToMyAccountPage(page);
    const myaccount = new myAccountHomePage(newPage);
    await myaccount.clickRegisterLink();

    const createAccount = new myAccountCreateAccountPage(newPage);
    await createAccount.validateCreateAccountErrorBusiness();
  })
})