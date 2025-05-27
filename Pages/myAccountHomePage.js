const {expect} = require ("@playwright/test")

class myAccontHomePage{
     constructor(page){

        this.page = page
        this.myAccountWelcomeHeader = "//span[contains(text(),'welcome')]"


     }

     async validateMyAccountHomePage(){

        await expect(this.myAccountWelcomeHeader).toBeVisible

     }
     

     }

     module.exports=myAccontHomePage