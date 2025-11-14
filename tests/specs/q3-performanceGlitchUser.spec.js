import Login from "../pages/login";
import Inventory from "../pages/inventory";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import {test, expect} from "@playwright/test";
import testData from "../../resources/testData.json" assert { type: 'json' };

test.describe("Complete Purchase Journey", () => {
    let login, inventory, cart, checkout, page, context;

    test.beforeAll(async({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        login = new Login(page);
        inventory = new Inventory(page);
        cart = new Cart(page);
        checkout = new Checkout(page);

        await page.goto("/");
    });

    test("Purchase with Performance_Glitch_User", async () => {
        const user = testData.users.performance;
        const password = testData.commonPassword;

        await login.enterUsername(user.username);
        await login.enterPassword(password);
        await login.clickLoginButton();
        await page.waitForTimeout(5000);

        await inventory.openHamburgerMenu();
        await inventory.resetAppState();
        await page.waitForTimeout(1000);
        await inventory.closeMenu();

        await inventory.clickSortingDropdown('za');
        await page.waitForTimeout(5000);

        const productName = page.locator("//div[@data-test='inventory-item-name']");
        const firstProductName = await productName.first().textContent();

        const addToCartButton = page.locator("//button[@data-test='add-to-cart-test.allthethings()-t-shirt-(red)']");
        await addToCartButton.first().click();

        await inventory.goToCart();

        await cart.proceedToCheckout();

        await checkout.enterFirstName("Test");
        await checkout.enterLastName("Name");
        await checkout.enterPostalCode("1212");
        await checkout.clickContinue();

        const checkoutProductName = await checkout.getItemNames();
        expect(checkoutProductName).toContain(firstProductName);

        const totalPrice = await checkout.getTotal();
        expect(totalPrice).toContain("Total: $");

        await checkout.clickFinish();

        const successHeader = await checkout.getCompleteHeader();
        expect(successHeader).toBe("Thank you for your order!");

        await checkout.clickBackHomeButton();
        //await page.waitForTimeout(4000);

        await inventory.openHamburgerMenu();
        await inventory.resetAppState();

        await inventory.logout();
    })
})