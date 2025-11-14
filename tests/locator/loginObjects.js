export default class LoginObject{
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator("//input[@id='login-button']");
        this.errorMessage = page.locator("//h3[contains(text, error)]");
        this.errorCloseButton = page.locator("//button[@class=('error-button')]")
    }
}