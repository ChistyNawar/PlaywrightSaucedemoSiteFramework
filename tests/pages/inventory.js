import InventoryObject from "../locator/inventoryObject";

export default class Inventory {
    constructor(page){
        this.page = page;
        this.locator = new InventoryObject(page);
    }

    async openHamburgerMenu(){
        await this.locator.hamburgerMenu.click();
    }

    async resetAppState(){
        await this.locator.resetAppStateButton.click();
    }

    async logout(){
        await this.locator.logoutButton.click();
    }

    async closeMenu(){
        await this.locator.closeMenuButton.click();
    }

    async addBackpackToCart(){
        await this.locator.addToCartBackpack.click();
    }

    async addBikeLightToCart(){
        await this.locator.addToCartBikeLight.click();
    }

    async addBoltTshirtToCart(){
        await this.locator.addToCartBoltTshirt.click();
    }

    async addFleeceJacketToCart(){
        await this.locator.addToCartFleeceJacket.click();
    }

    async addOnesieToCart(){
        await this.locator.addToCartOnesie.click();
    }

    async addTshirtRedToCart(){
        await this.locator.addToCartTshirtRed.click();
    }

    async getCartBadgeCount(){
        return await this.locator.shoppingCartBadge.textContent();
    }

    async goToCart(){
        await this.locator.shoppingCartLink.click();
    }

    async clickSortingDropdown(sortOption){
        await this.locator.sortingDropDown.selectOption(sortOption);
    }
}