const {expect} = require ("@playwright/test")

class myAccountCreateAccountPage{
     constructor(page){
        this.page = page;
        this.createAccountHeader = page.locator('#createYourAccountHeading');
        this.individualAccount = page.locator('#individualTileLabel');
        this.businessAccount = page.locator('#businessActiveTileLabel');
        this.backBtn = page.locator('#backButton');
        this.firstName = page.locator('#firstname');
        this.lasttName = page.locator('#lastname');
        this.emailAddress = page.locator('#emailAddress');
        this.mobNum = page.locator('#mobileNumber');
        this.continueBtn = page.locator('#continueButton');
        this.cancelBtn = page.locator('#cancelButton');
        this.myAccountRegValidationErrors = page.locator('#validationErrors');
        
      


     }

     async validateCreateAccountErrorIndividual(){

        await expect(this.createAccountHeader).toBeVisible();
        await this.individualAccount.click();
        await this.continueBtn.click();
        await expect(this.myAccountRegValidationErrors).toBeVisible();

     }

     async validateCreateAccountErrorBusiness(){

        await expect(this.createAccountHeader).toBeVisible();
        await this.businessAccount.click();
        await this.continueBtn.click();
        await expect(this.myAccountRegValidationErrors).toBeVisible();

     }


    

}

module.exports=myAccountCreateAccountPage