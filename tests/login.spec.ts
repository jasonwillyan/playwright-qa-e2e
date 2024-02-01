import { test, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { LoginPage } from "../pages/login.ts";
require('dotenv').config();

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe("Login Page Interface", () => {
  test("[ID101] @login @phone @desktop check interface elements should be visible", async ({ page }) => {
    const title: string = "OrangeHRM";
    const titleModal: string = "Login";
    const placeholder = {
      username: "Username",
      password: "Password"
    };

    const loginPage = new LoginPage(page);
    expect(await page.title()).toBe(title);

    const titleText = await loginPage.getTitleModalLogin();
    expect(titleText).toBe(titleModal);

    const isTitleVisible = await loginPage.validateLoginIsVisible();
    expect(isTitleVisible).toBeTruthy();

    const areLogosVisible = await loginPage.validateLogosVisible();
    expect(areLogosVisible).toBeTruthy();

    const placeholders = await loginPage.validatePlaceholders();
    expect(placeholders.username).toBe(placeholder.username);
    expect(placeholders.password).toBe(placeholder.password);
  });
});

test.describe("Login links validation", () => {
  test("[ID102] @login @phone @desktop validate links and social links", async ({ page }) => {
    const links = [
      "https://www.linkedin.com/company/orangehrm/mycompany/",
      "https://www.facebook.com/OrangeHRM/",
      "https://twitter.com/orangehrm?lang=en",
      "https://www.youtube.com/c/OrangeHRMInc"
    ]

    const loginPage = new LoginPage(page);
    await loginPage.validateLinks(links);

    await loginPage.clickForgotPasswordLink();
    expect(page.url()).toContain("/requestPasswordResetCode");
    await page.goBack();

    const url = await loginPage.getOrangeHRMLink();
    await loginPage.clickOrangeHRMLink();

    const newPage = await page.context().waitForEvent("page");
    const newUrl = newPage.url();

    const formattedNewUrl = newUrl.replace("https", "http").replace(/\/$/, "");

    expect(formattedNewUrl).toEqual(url);
  });
});

test.describe("Login functionality", () => {
  test("[ID103] @login @phone @desktop validate successful login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginUser(process.env.USER!, process.env.PASSWORD!);
    await loginPage.clickLoginBtn();

    expect(page.url()).toContain("/dashboard/index");
    expect(await loginPage.validateUsername()).toBeTruthy();
    const nameIsVisible = await loginPage.validateUserAvatarIsVisible();
    expect(nameIsVisible).toBeTruthy();
  });

  test("[ID104] @login @phone @desktop validate login with incorrect password", async ({ page }) => {
    const messageAlert = "Invalid credentials";
    const loginPage = new LoginPage(page);

    await loginPage.loginUser(process.env.USER!, faker.internet.password());
    await loginPage.clickLoginBtn();

    const alertErrorIsVisible = await loginPage.validateAlertLoginError();
    expect(alertErrorIsVisible).toBeTruthy();
    expect(await loginPage.getAlertMessage()).toBe(messageAlert);
  });

  test("[ID105] @login @phone @desktop validate login with null password", async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.loginUser(process.env.USER!, "");
    await loginPage.clickLoginBtn();

    const alertErrorRequiredIsVisible = await loginPage.validateErrorMessageRequired();
    expect(alertErrorRequiredIsVisible).toBeTruthy();
    expect(await loginPage.getAlertMessageRequired()).toContain("Required");
  });


  test("[ID106] @login @phone @desktop validate login with incorrect username", async ({ page }) => {
    const messageAlert = "Invalid credentials";
    const loginPage = new LoginPage(page);
  
    await loginPage.loginUser(faker.internet.userName(), process.env.PASSWORD!);
    await loginPage.clickLoginBtn();

    const alertErrorIsVisible = await loginPage.validateAlertLoginError();
    expect(alertErrorIsVisible).toBeTruthy();
    expect(await loginPage.getAlertMessage()).toBe(messageAlert);
  });

  test("[ID107] @login @phone @desktop validate login with null username", async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.loginUser("", process.env.PASSWORD!);
    await loginPage.clickLoginBtn();

    const alertErrorRequiredIsVisible = await loginPage.validateErrorMessageRequired();
    expect(alertErrorRequiredIsVisible).toBeTruthy();
    expect(await loginPage.getAlertMessageRequired()).toContain("Required");  
  });

  test("[ID108] @login @phone @desktop validate login without providing user and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.loginUser("", "");
    await loginPage.clickLoginBtn();

    const alertMessages = await loginPage.getAlertMessagesRequired();
    console.log(alertMessages)
    expect(alertMessages.length).toBe(2);
  
    for (const alertMessage of alertMessages) {
      expect(alertMessage.isVisible).toBe(true);
      expect(alertMessage.textContent).toBe('Required');
    }
  });
});
