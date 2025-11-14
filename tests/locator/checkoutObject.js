export default class CheckoutObject{
    constructor(page){
        this.page = page;

        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.postalCode = page.getByPlaceholder("Zip/Postal Code");
        this.continueButton = page.locator("//input[@data-test='continue']");
        this.cancelButton = page.locator();

        this.itemNames = page.locator("//div[@data-test='inventory-item-name']");
        this.total = page.locator("//div[@data-test='total-label']");
        this.finishButton = page.locator("//button[@data-test='finish']");

        this.completeHeader = page.locator("//h2[@data-test='complete-header']");
        this.completeText = page.locator("//div[@data-test='complete-text']");
        this.backHomeButton = page.locator("//button[@data-test='back-to-products']");
    }
}