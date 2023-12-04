import { expect, Page } from "@playwright/test";
import { Base } from "./utils";

export class LoginPage extends Base {
  constructor(page: Page) {
    super(page);
  }

  async getTitleModalLogin() {
    return this.getElementText(this.selectors.login.title);
  }

  async validateLoginIsVisible() {
    return this.isElementVisible(this.selectors.login.title);
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
    await this.page.locator(this.selectors.login.forgotPasswordLink).click();
    await this.page.waitForLoadState("load");
  }
  
  async getOrangeHRMLink() {
    return await this.getHref(this.selectors.login.orangeHRMLink);  
  }
  
  async clickOrangeHRMLink() {
    await this.page.locator(this.selectors.login.orangeHRMLink).click();
  }

  async validateLinks(links: string[]) {
    for (const index in this.selectors.login.socialLinks) {
      let href = await this.getHref(this.selectors.login.socialLinks[index]);
      expect(href).toEqual(links[index]);
    }
  }
}
