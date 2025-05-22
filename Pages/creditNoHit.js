const {expect} = require ("@playwright/test")

class creditNoHitPage{
     constructor(page)
     {
        this.page = page
        this.howIsEverythingLookingHeader = "//div[contains(text(),'How's everything looking?')]"
        this.checkYourInfo = "//div[contains(text(),'Check your info')]"
        this.creditNoHitContinueBtn = "//button[@id='NOCREDIT_HIT-btn']"



}

        async validateCreditNoHit(){

            await expect(this.howIsEverythingLookingHeader).toBeVisible
            await expect(this.checkYourInfo).toBeVisible
            await this.page.click(this.creditNoHitContinueBtn)

        }

}

module.exports=creditNoHitPage