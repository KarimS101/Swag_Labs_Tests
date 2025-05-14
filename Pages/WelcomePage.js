const {expect} = require ("@playwright/test")

class welcomePage{
     constructor(page)
     {

        this.page = page
        this.selectRenters = "//span[contains(text(),'auto')]"
        this.enterZip = "//input[@id='zipCodeInputEl']"
        this.startMyQuoteBtn = "//button[@id='btnStart']"
      


     }

     async welcomePageNavigation(){

        await this.page.click(this.selectRenters)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
     }


}

module.exports=welcomePage

