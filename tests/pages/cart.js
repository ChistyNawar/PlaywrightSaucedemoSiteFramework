import CartObject from "../locator/cartObject";

export default class Cart {

    constructor(page){
        this.page = page;
        this.locator = new CartObject(page);
    }

    async getCartItemCount(){
        return await this.locator.cartItems.count();
    }

    async getCartItemNames(){
        const names = await this.locator.cartItemNames.allTextContents();
        return names;
    }

    async getCartItemPrices(){
        const prices = await this.cartItemPrices.allTextContents();
        return prices;
    }

    async proceedToCheckout(){
        await this.locator.checkoutButton.click();
    }

    async continueShopping(){
        await this.locator.continueShopping.click();
    }
}