import { Page } from "@playwright/test";
import { selectors as loginSelectors } from "../selectors/login";
import { selectors as dashboardSelectors } from "../selectors/dashboard";

export class Base {
  protected page: Page;
  protected selectors = {
    login: loginSelectors,
    dashboard: dashboardSelectors,
  };

  constructor(page: Page) {
    this.page = page;
  }

  async isMobileEnvironment() {
    const isMobile = await this.page.evaluate(() => window.innerWidth <= 768);
    return isMobile;
  }
  
  async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async getElementText(selector: string): Promise<string> {
    await this.waitForElement(selector);
    const element = this.page.locator(selector);
    return await element.innerText();
  }

  async isElementVisible(selector: string): Promise<boolean> {
    await this.waitForElement(selector);
    const element = this.page.locator(selector);
    return await element.isVisible();
  }

  async getPlaceholder(selector: string): Promise<string> {
    const dataInputPlaceholder = this.page.locator(selector);
    const placeholder = await dataInputPlaceholder.getAttribute("placeholder");
    return placeholder !== null ? placeholder : "";
  }

  async getHref(selector: string) {
    return await this.page.getAttribute(selector, "href");
  }

  async clickElement(selector: string) {
    const element = this.page.locator(selector);
    return element.click();
  }
}