const {expect} = require ("@playwright/test")

class SwagLabs_Checkout{
    constructor(page)
    {

            this.page = page
            this.customerFirstName = page.locator('#first-name');
            this.customerLastName = page.locator('#last-name');
            this.customerPostCode = page.locator('#postal-code');
            this.cancelBtn = page.locator('#cancel');
            this.continueBtn = page.locator('#continue');
           
            
    }


    async enterValidDetailsAndContinue(){
        await expect(this.customerFirstName).toBeVisible
        await this.customerFirstName.fill("Mike");
        await this.customerLastName.fill("Smith");
        await this.customerPostCode.fill("BT12345");
        await this.continueBtn.click();

     }


}

module.exports=SwagLabs_Checkout;