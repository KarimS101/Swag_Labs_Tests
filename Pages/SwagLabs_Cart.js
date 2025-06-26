const {expect} = require ("@playwright/test")

class SwagLabs_Cart{
    constructor(page)
    {

            this.page = page
            this.removeItem = page.locator('#remove');
            this.backToProductsLink = page.locator('#back-to-products');
            this.continueShopping = page.locator('#continue-shopping');
            this.checkout = page.locator('#checkout');
           
            
    }

    async checkOut(){
        await expect(this.checkout).toBeVisible
        await this.checkout.click()

     }


}

module.exports=SwagLabs_Cart;