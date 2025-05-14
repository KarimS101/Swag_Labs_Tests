const {expect} = require ("@playwright/test")

class enterCustomerDetailsPage{
     constructor(page)
     {

        this.page = page
        this.hiThereHeader = "//div[contains(text(),'Hi there')]"

      


     }

     async enterCustomerDetails(){

        await expect(this.hiThereHeader).toBeVisible 
     }


}

module.exports=enterCustomerDetailsPage