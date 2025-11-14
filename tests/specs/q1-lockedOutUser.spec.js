import Login from "../pages/login";
import {test, expect} from "@playwright/test";
import testData from "../../resources/testData.json" assert { type: 'json' };

test.describe("Locked Out User Test", () => {
    let login, page, context;

    test.beforeAll(async({browser}) =>{
        context = await browser.newContext();
        page = await context.newPage();
        login = new Login(page);
        await page.goto("/")
    })

    test("Login with locked_out_user and display error message", async() => {
        const user = testData.users.lockedOut;
        const password = testData.commonPassword;
        const expectedErrorMessage = "Epic sadface: Sorry, this user has been locked out.";
        await login.enterUsername(user.username);
        await page.waitForTimeout(2000);
        await login.enterPassword(password);
        await page.waitForTimeout(2000);
        await login.clickLoginButton();

        await page.waitForTimeout(2000);
        await expect(login.locator.errorMessage).toBeVisible();
        const actualErrorMessage = await login.getErrorMessage();
        expect(actualErrorMessage).toContain(expectedErrorMessage);

    })
})