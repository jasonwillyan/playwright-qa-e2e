import { expect, Page } from "@playwright/test";
import { selectors } from "../selectors/login";

export class Base {
  protected page: Page;
  protected selectors = selectors;

  constructor(page: Page) {
    this.page = page;
    this.selectors = selectors;
  }

  async getElementText(selector: string): Promise<string> {
    const element = this.page.locator(selector);
    return await element.innerText();
  }

  async isElementVisible(selector: string): Promise<boolean> {
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
}