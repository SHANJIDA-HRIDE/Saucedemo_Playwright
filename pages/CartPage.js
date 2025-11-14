const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('.inventory_item_name');
  }

  async verifyProduct(expectedName) {
    await expect(this.productTitle).toHaveText(expectedName);
  }
}

module.exports = { CartPage };
