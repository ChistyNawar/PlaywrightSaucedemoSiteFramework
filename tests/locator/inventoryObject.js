export default class InventoryObject{
    constructor(page){
        this.page = page;

        this.hamburgerMenu = page.locator("//div[@class='bm-burger-button']");
        this.resetAppStateButton = page.locator("//a[@id='reset_sidebar_link']");
        this.logoutButton = page.locator("//a[@id='logout_sidebar_link']");
        this.closeMenuButton = page.locator("//button[@id='react-burger-cross-btn']");

        this.addToCartBackpack = page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']");
        this.addToCartBikeLight = page.locator("//button[@data-test='add-to-cart-sauce-labs-bike-light']");
        this.addToCartBoltTshirt = page.locator("//button[@data-test='add-to-cart-sauce-labs-bolt-t-shirt']");
        this.addToCartFleeceJacket = page.locator("//button[@data-test='add-to-cart-sauce-labs-fleece-jacket']");
        this.addToCartOnesie = page.locator("//button[@data-test='add-to-cart-sauce-labs-onesie']");
        this.addToCartTshirtRed = page.locator("//button[@data-test='add-to-cart-test.allthethings()-t-shirt-(red)']");
        
        
        this.shoppingCartBadge = page.locator("//span[@class='shopping_cart_badge']");
        this.shoppingCartLink = page.locator("//a[@class='shopping_cart_link']");

        this.sortingDropDown = page.locator('[data-test="product-sort-container"]');
    }
}