export default class CartObject{
    constructor(page){
        this.page = page;

        this.cartItems = page.locator("//div[@class='cart_item']");
        this.cartItemNames = page.locator("//div[@class='inventory_item_name']");
        this.cartItemPrices = page.locator("//div[@class='inventory_item_price']");

        this.checkoutButton = page.locator("//button[@name='checkout']");
        this.continueShoppingButton = page.locator("//button[@name='continue-shopping']");
        this.removeButtons = page.locator("//button[contains(@data-test,'remove')]");
    }
}