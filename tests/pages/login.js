import LoginObject from "../locator/loginObjects.js";

export default class Login {
    constructor(page){
        this.page = page;
        this.locator = new LoginObject(page);
    }

    async enterUsername(username){
        await this.locator.username.fill(username);
    }

    async enterPassword(password){
        await this.locator.password.fill(password);
    }

    async clickLoginButton(){
        await this.locator.loginButton.click();
    }

    async getErrorMessage(){
        return await this.locator.errorMessage.textContent();
    }
    
    async clickErrorCloseButton(){
        await this.locator.errorCloseButton.click();
    }
}