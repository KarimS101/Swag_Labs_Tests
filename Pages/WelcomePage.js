const {expect} = require ("@playwright/test")

class welcomePage{
     constructor(page)
     {

        this.page = page
        this.selectRenters = "//span[contains(text(),'renters')]"
        this.selectHome= "//span[contains(text(),'home')]"
        this.selectCondo = "//span[contains(text(),'condo')]"
        this.selectAuto = "//span[contains(text(),'auto')]"
        this.enterZip = "//input[@id='zipCodeInputEl']"
        this.startMyQuoteBtn = "//button[@id='btnStart']"
        this.disableCookie = "//button[contains(text(),'Continue')]"
        this.multiplePropertyError = "//*[contains(text(),' You can only choose one property. Please try again.')]"
        this.EnterYourZipError = "//span[contains(text(),'Please enter your ZIP code.')]"
      


     }

     async enterYourZipErrorMessage(){

      await expect(this.disableCookie).toBeVisible
      await this.page.click(this.disableCookie)
      await this.page.click(this.selectAuto)
      await this.page.click(this.startMyQuoteBtn)
      await expect(this.multiplePEnterYourZipErrorropertyError).toBeVisible
   }

     async welcomePageNavigation(){

        await expect(this.disableCookie).toBeVisible
        await this.page.click(this.disableCookie)
        await this.page.click(this.selectRenters)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
     }


     async welcomePageRenterHomeError(){
        await expect(this.disableCookie).toBeVisible
        await this.page.click(this.disableCookie)
        await this.page.click(this.selectRenters)
        await this.page.click(this.selectHome)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
        await expect(this.multiplePropertyError).toBeVisible
     }

     async welcomePageRenterCondoError(){
        await expect(this.disableCookie).toBeVisible
        await this.page.click(this.disableCookie)
        await this.page.click(this.selectRenters)
        await this.page.click(this.selectCondo)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
        await expect(this.multiplePropertyError).toBeVisible
     }

}

module.exports=welcomePage

