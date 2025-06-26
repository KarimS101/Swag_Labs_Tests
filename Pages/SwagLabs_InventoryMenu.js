const {expect} = require ("@playwright/test")

class SwagLabs_Inventory{
    constructor(page)
    {
//Navigation
            this.page = page
            this.inventoryMenu = page.locator('#inventory_container');
            this.menuBtn = page.locator('#react-burger-menu-btn');
            this.logoutBtn = page.locator('#logout_sidebar_link');
            this.oneItemAdded = "//span[contains(text(),'1')]"
            this.removeItem = page.locator('#remove');
            this.backToProductsLink = page.locator('#back-to-products');
            this.shoppingCartContainer = page.locator('#shopping_cart_container');
            

           
//Items
            this.backpackItem = "//div[contains(text(),'Sauce Labs Backpack')]"
            this.addToCart = page.locator('#add-to-cart');
            
            
            
        
    }

    async validateInvenoryPage(){
        await expect(this.inventoryMenu).toBeVisible
     }

     async selectBackPack(){
        await this.page.click(this.backpackItem)
        await this.addToCart.click();
        await expect(this.oneItemAdded).toBeVisible
        await this.shoppingCartContainer.click()

     }

     async logOut(){
        await this.menuBtn.click();
        await this.logoutBtn.click();
     }
}

module.exports=SwagLabs_Inventory; 