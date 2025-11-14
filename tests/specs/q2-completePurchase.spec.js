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

    test("Purchase with standard_user", async () => {
        const user = testData.users.standard;
        const password = testData.commonPassword;

        await login.enterUsername(user.username);
        await login.enterPassword(password);
        await login.clickLoginButton();

        await inventory.openHamburgerMenu();
        await inventory.resetAppState();
        await page.waitForTimeout(1000);
        await inventory.closeMenu();

        await inventory.addBikeLightToCart();
        await inventory.addBoltTshirtToCart();
        await inventory.addFleeceJacketToCart();

        const cartCount = await inventory.getCartBadgeCount();
        expect(parseInt(cartCount)).toBe(3);

        await inventory.goToCart();

        await cart.proceedToCheckout();

        await checkout.enterFirstName("Test");
        await checkout.enterLastName("Name");
        await checkout.enterPostalCode("1212");
        await checkout.clickContinue();

        const productNames = await checkout.getItemNames();
        expect(productNames).toContain("Sauce Labs Bike Light");
        expect(productNames).toContain("Sauce Labs Bolt T-Shirt");
        expect(productNames).toContain("Sauce Labs Fleece Jacket");

        const totalPrice = await checkout.getTotal();
        expect(totalPrice).toBe("Total: $82.05");

        await checkout.clickFinish();

        const successHeader = await checkout.getCompleteHeader();
        expect(successHeader).toBe("Thank you for your order!");

        await checkout.clickBackHomeButton();

        await inventory.openHamburgerMenu();
        await inventory.resetAppState();

        await inventory.logout();
    })
})