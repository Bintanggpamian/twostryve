// ============================================================
// TWOSTRYVE — Cart Management
// localStorage-based cart (no login required)
// ============================================================

const Cart = {
  STORAGE_KEY: 'twostryve_cart',

  // Get all cart items
  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  // Save items to localStorage
  save(items) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.updateBadge();
    window.dispatchEvent(new CustomEvent('cart-updated'));
  },

  // Add item to cart
  addItem(product, color, size, qty = 1) {
    const items = this.getItems();
    const existingIndex = items.findIndex(
      item => item.productId === product.id && item.color === color && item.size === size
    );

    if (existingIndex >= 0) {
      items[existingIndex].qty += qty;
    } else {
      items.push({
        productId: product.id,
        name: product.name,
        image: product.images[0],
        color,
        size,
        price: product.salePrice || product.price,
        originalPrice: product.price,
        qty,
        slug: product.slug,
      });
    }

    this.save(items);
    return true;
  },

  // Update item quantity
  updateQty(productId, color, size, qty) {
    const items = this.getItems();
    const index = items.findIndex(
      item => item.productId === productId && item.color === color && item.size === size
    );
    if (index >= 0) {
      if (qty <= 0) {
        items.splice(index, 1);
      } else {
        items[index].qty = qty;
      }
      this.save(items);
    }
  },

  // Remove item from cart
  removeItem(productId, color, size) {
    let items = this.getItems();
    items = items.filter(
      item => !(item.productId === productId && item.color === color && item.size === size)
    );
    this.save(items);
  },

  // Clear the cart
  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.updateBadge();
    window.dispatchEvent(new CustomEvent('cart-updated'));
  },

  // Get total item count
  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.qty, 0);
  },

  // Get subtotal
  getSubtotal() {
    return this.getItems().reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  // Get shipping cost
  getShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal >= STORE.freeShippingMin) return 0;
    return this.getItems().length > 0 ? STORE.shippingCost : 0;
  },

  // Get total
  getTotal() {
    return this.getSubtotal() + this.getShipping();
  },

  // Update cart badge count in header
  updateBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.classList.toggle('show', count > 0);
    }
  },
};
