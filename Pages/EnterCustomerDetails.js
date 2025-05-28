const {expect} = require ("@playwright/test")

class enterCustomerDetailsPage{
     constructor(page)
     {

        this.page = page
        this.hiThereHeader = "//div[contains(text(),'Hi there')]"
        this.givenName = "//input[@id='fullName_givenName']"
        this.surName = "//input[@id='fullName_surname']"
        this.birthDate = "//input[@id='birthDt_birthDt']"
        this.addressLine = "//input[@id='insuredAddress_addressLineText']"
        this.aptUnitNmbr = "//input[@id='insuredAddress_addressLineUnitNbr']"
        this.city = "//input[@id='insuredAddress_cityName']"
        this.state = "//input[@id='insuredAddress_stateProvName']"
        this.zipCode = "//input[@id='insuredAddress_postalCode']"
        this.startOverText = "//*[contains(text(),'If you would like to change your state or ZIP code, you can')]"
        this.getStartedBtn = "//button[@id='PREFILL_PARTICIPANT-btn']"

     }

     async enterHappyPathCustomerDetails(){

        await expect(this.hiThereHeader).toBeVisible
        await this.page.fill(this.givenName,"Mike")
        await this.page.fill(this.surName,"Smith")
        await this.page.fill(this.birthDate,"01-01-1990")
        await this.page.fill(this.addressLine,"1 Main St")
        await this.page.fill(this.city,"Chicago")
        await expect(this.startOverText).toBeVisible
        await this.page.click(this.getStartedBtn)



     }


}

module.exports=enterCustomerDetailsPage