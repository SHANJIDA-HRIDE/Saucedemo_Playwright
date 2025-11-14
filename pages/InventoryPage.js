const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await this.addBackpackBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
    await expect(this.page).toHaveURL(/.*cart/);
  }
}

module.exports = { InventoryPage };
