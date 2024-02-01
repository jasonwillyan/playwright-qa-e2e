import { expect, Page } from "@playwright/test";
import { Base } from "./utils";

export class LoginPage extends Base {
  constructor(page: Page) {
    super(page);
  }

  async getTitleModalLogin() {
    return this.getElementText(this.selectors.login.loginBtn);
  }

  async getAlertMessage() {
    return this.getElementText(this.selectors.login.alertMessage);
  }

  async getAlertMessageRequired() {
    return this.getElementText(this.selectors.login.alertMessageRequired);
  }

  async validateErrorMessageRequired() {
    return this.isElementVisible(this.selectors.login.alertMessageRequired);
  }

  async validateUsername() {
    return this.isElementVisible(this.selectors.dashboard.username);
  }

  async validateLoginIsVisible() {
    return this.isElementVisible(this.selectors.login.title);
  }

  async validateUserAvatarIsVisible() {
    return this.isElementVisible(this.selectors.dashboard.userAvatar);
  }

  async validateAlertLoginError() {
    return this.isElementVisible(this.selectors.login.alertErro);
  }

  async validateLogosVisible(): Promise<boolean> {
    for (const item of this.selectors.login.logo) {
      let logoLocator = this.page.locator(item);
      await this.page.waitForSelector(item);
      if (!(await logoLocator.isVisible())) {
        return false;
      }
    }
    return true;
  }
  
  async validatePlaceholders() {
    const usernamePlaceholder = await this.getPlaceholder(this.selectors.login.placeholders.username);
    const passwordPlaceholder = await this.getPlaceholder(this.selectors.login.placeholders.password);
  
    return {
      username: usernamePlaceholder,
      password: passwordPlaceholder,
    };
  }
  
  async clickForgotPasswordLink() {
    await this.clickElement(this.selectors.login.forgotPasswordLink);
    await this.page.waitForLoadState("load");
  }
  
  async getOrangeHRMLink() {
    return await this.getHref(this.selectors.login.orangeHRMLink);  
  }
  
  async clickOrangeHRMLink() {
    await this.clickElement(this.selectors.login.orangeHRMLink);
  }

  async validateLinks(links: string[]) {
    for (const index in this.selectors.login.socialLinks) {
      let href = await this.getHref(this.selectors.login.socialLinks[index]);
      expect(href).toEqual(links[index]);
    }
  }

  async getAlertMessagesRequired() {
    const elements = await this.page.$$(this.selectors.login.alertMessageRequired);
    
    return Promise.all(elements.map(async (element) => {
      const isVisible = await element.isVisible();
      const textContent = await this.page.evaluate(el => el.textContent || '', element);

      return { isVisible, textContent: textContent.trim() };
    }));
  }

  async loginUser(login: string, password: string) {
    const inputUsername = this.page.locator(this.selectors.login.inputUsername);
    const inputPassword = this.page.locator(this.selectors.login.inputPassword);
    await inputUsername.fill(login);
    await inputPassword.fill(password);
  }

  async clickLoginBtn() {
    return this.clickElement(this.selectors.login.loginBtn);
  }
}
