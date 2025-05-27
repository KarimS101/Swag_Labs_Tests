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
        this.enterAtLeastOnePoductError = "//*[contains(text(),' Please select at least one product to continue.')]"
        this.LogIntoMyAccountLink = "//*[contains(text(),'Log in to My Account')]"
      


     }

     async enterYourZipErrorMessage(){

      await expect(this.disableCookie).toBeVisible
      await expect(this.selectRenters).toBeVisible
      await this.page.click(this.disableCookie)
      await this.page.click(this.selectAuto)
      await this.page.click(this.startMyQuoteBtn)
      await expect(this.multiplePEnterYourZipErrorropertyError).toBeVisible
   }

     async welcomePageNavigation(){

        await expect(this.disableCookie).toBeVisible
        await expect(this.selectRenters).toBeVisible
        await this.page.click(this.disableCookie)
        await this.page.click(this.selectRenters)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
     }


     async welcomePageRenterHomeError(){
        await expect(this.disableCookie).toBeVisible
        await expect(this.selectRenters).toBeVisible
        await this.page.click(this.disableCookie)
        await this.page.click(this.selectRenters)
        await this.page.click(this.selectHome)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
        await expect(this.multiplePropertyError).toBeVisible
     }

     async welcomePageRenterCondoError(){
        await expect(this.disableCookie).toBeVisible
        await expect(this.selectRenters).toBeVisible
        await this.page.click(this.disableCookie)
        await this.page.click(this.selectRenters)
        await this.page.click(this.selectCondo)
        await this.page.fill(this.enterZip,"60025")
        await this.page.click(this.startMyQuoteBtn)
        await expect(this.multiplePropertyError).toBeVisible
     }

     async welcomePageAtLeaseOneProducterror(){
      await expect(this.disableCookie).toBeVisible
      await expect(this.selectRenters).toBeVisible
      await this.page.click(this.disableCookie)
      await this.page.click(this.startMyQuoteBtn)
      await expect(this.enterAtLeastOnePoductError).toBeVisible
   }



   async myAccountLink(){
      await expect(this.disableCookie).toBeVisible
      await expect(this.LogIntoMyAccountLink).toBeVisible
      await this.page.click(this.LogIntoMyAccountLink)
      await this.page.goto('https://myaccountrwd.allstate.com/anon/account/login'); // Replace with your actual URL
   }

}

module.exports=welcomePage

