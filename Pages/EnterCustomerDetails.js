const {expect} = require ("@playwright/test")

class enterCustomerDetailsPage{
     constructor(page)
     {

        this.page = page
        this.hiThereHeader = "//div[contains(text(),'Hi there')]"
        this.givenName = "//input[@id='fullName_givenName']"

      


     }

     async enterCustomerDetails(){

        await expect(this.hiThereHeader).toBeVisible 
        await this.page.fill(this.givenName,"Mike")
     }


}

module.exports=enterCustomerDetailsPage