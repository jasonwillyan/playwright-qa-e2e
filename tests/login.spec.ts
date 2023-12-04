import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.ts";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test(" [ID101] @login @phone @desktop check interface elements should be visible", async ({ page }) => {
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

test(" [ID102] @login @phone @desktop validate links and social links", async ({ page }) => {
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
