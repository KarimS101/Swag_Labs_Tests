const {expect} = require ("@playwright/test")

class SwagLabs_Login{
    constructor(page)
    {
            this.page = page
            this.swagLabHeader = page.locator('#login_button_container');
            this.username = page.locator('#user-name');
            this.password = page.locator('#password');
            this.loginBtn = page.locator('#login-button');
            this.loginError = page.locator('#error');
            this.lockedOutError = page.locator("//*[contains(text(),'Epic sadface: Sorry, this user has been locked out.')]")
        
    }
    async validateLoginPage(){
      await expect(this.swagLabHeader).toBeVisible();
   }

    async validateErrorOnLogin(){
        await expect(this.swagLabHeader).toBeVisible();
        await this.loginBtn.click()
        await expect(this.loginError).toBeVisible
     }
     async validateLockedUser(){
        await expect(this.swagLabHeader).toBeVisible();
        await this.username.fill("locked_out_user");
        await this.password.fill("secret_sauce");
        await this.loginBtn.click();
        await expect(this.lockedOutError).toBeVisible
     }

     async validUserLogin(){
      await expect(this.swagLabHeader).toBeVisible();
      await this.username.fill("standard_user");
      await this.password.fill("secret_sauce");
      await this.loginBtn.click();
      await expect(this.inventoryMenu).toBeVisible
   }
    


}

module.exports=SwagLabs_Login; 