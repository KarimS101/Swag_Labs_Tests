const {expect} = require ("@playwright/test")

class SwagLabs_Inventory{
    constructor(page)
    {
            this.page = page
            this.inventoryMenu = page.locator('#inventory_container');
            this.menuBtn = page.locator('#react-burger-menu-btn');
            this.logoutBtn = page.locator('#logout_sidebar_link');
            
        
    }

    async validateInvenoryPage(){
        await expect(this.inventoryMenu).toBeVisible
     }

     async logOut(){
        await this.menuBtn.click();
        await this.logoutBtn.click();
        
     }
}

module.exports=SwagLabs_Inventory; 