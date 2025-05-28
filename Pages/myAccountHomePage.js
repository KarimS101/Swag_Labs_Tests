const {expect} = require ("@playwright/test")

class myAccountHomePage{
     constructor(page){

        this.page = page;
        this.myAccountWelcomeHeader = "//span[contains(text(),'to My Account')]"
        this.myAccountUserNameField = page.locator('#username');
        this.myAccountPasswordField = page.locator("//input[@id='password']").first();
        this.logInBtn = page.locator("//button[@name='frmButton']").first();
        this.myAccountLoginError = page.locator('#serverErrors');
      }

     async validateMyAccountHomePage(){

        await expect(this.myAccountWelcomeHeader).toBeVisible

     }

     async validateMyAccountLoginError() {
        //await expect(this.myAccountWelcomeHeader).toBeVisible();
        await expect(this.myAccountUserNameField).toBeVisible();
        // Fill directly using locators
        await this.myAccountUserNameField.fill("Abc");
        await this.myAccountPasswordField.fill("Def");
        // Click login button
        await this.logInBtn.click();
        // Assert error appears
        await expect(this.myAccountLoginError).toBeVisible();
      }



     }

     module.exports=myAccountHomePage