const { expect } = require('@playwright/test');
class MenuPage {
  constructor(page) {
    this.page = page;
    this.menuBtn = page.locator("#react-burger-menu-btn");
    this.logoutBtn = page.locator("#logout_sidebar_link");
  }

  async logout() {
    await this.menuBtn.click();
    await this.logoutBtn.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}

module.exports = { MenuPage };
