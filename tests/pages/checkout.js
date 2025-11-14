import CheckoutObject from "../locator/checkoutObject";

export default class Checkout {
    constructor(page){
        this.page = page;
        this.locator = new CheckoutObject(page);
    }

    async enterFirstName(firstName){
        await this.locator.firstName.fill(firstName);
    }

    async enterLastName(lastName){
        await this.locator.lastName.fill(lastName);
    }

    async enterPostalCode(postalCode){
        await this.locator.postalCode.fill(postalCode);
    }

    async clickContinue(){
        await this.locator.continueButton.click();
    }

    async getItemNames(){
        const names = await this.locator.itemNames.allTextContents();
        return names;
    }

    async getTotal(){
        return await this.locator.total.textContent();
    }

    async clickFinish(){
        await this.locator.finishButton.click();
    }

    async getCompleteHeader(){
        return await this.locator.completeHeader.textContent();
    }

    async getCompleteText(){
        return await this.locator.completeText.textContent();
    }

    async clickBackHomeButton(){
        await this.locator.backHomeButton.click();
    }

}