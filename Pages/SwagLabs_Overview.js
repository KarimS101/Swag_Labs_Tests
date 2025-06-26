const {expect} = require ("@playwright/test")

class SwagLabs_Overview{
    constructor(page)
    {

            this.page = page
            this.finishTransactionBtn = page.locator('#finish');
            this.thankyouConfrimation = "//h2[contains(text(),'Thank you for your order!')]"
            this.backtoProductsBtn = page.locator('#back-to-products');
            
           
            
    }

    async finishCheckout(){
        await expect(this.finishTransactionBtn).toBeVisible
        await this.finishTransactionBtn.click()
        await expect(this.thankyouConfrimation).toBeVisible

     }
}

module.exports=SwagLabs_Overview;