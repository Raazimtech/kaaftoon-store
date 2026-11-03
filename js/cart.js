document.addEventListener("DOMContentLoaded", () => {
  const root = KAA.$("#cart-content");
  const oldNames = {
    "apple-iphone":"Previous iPhone selection",
    "samsung-galaxy":"Previous Samsung selection",
    "apple-macbook-air":"Previous MacBook selection",
    "cctv-ip-camera":"Previous CCTV selection"
  };
  const esc = KAA.escapeHTML;
  function render() {
    const cart = KAA.getCart();
    const valid = cart.filter(item => KAA.productById(item.id));
    const outdated = cart.filter(item => !KAA.productById(item.id));
    KAA.$("#cart-page-count").textContent = "(" + KAA.cartQty() + ")";
    if (!cart.length) {
      root.innerHTML = '<div class="empty-cart"><div class="empty-cart-mark"></div><h2>Your cart is empty</h2><p>Browse the catalogue and add the exact models you want to enquire about.</p><a class="btn btn-primary" href="shop.html">Browse the store</a></div>';
      return;
    }
    const rows = valid.map(item => {
      const p = KAA.productById(item.id);
      const opts = Object.entries(item.opts || {}).map(([k,v]) => '<span><b>' + esc(k) + ':</b> ' + esc(v) + '</span>').join("");
      return '<article class="cart-item" data-key="' + esc(item.key || item.id) + '"><a class="cart-item-image" href="product.html?id=' + encodeURIComponent(p.id) + '"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" onerror="this.hidden=true;this.parentElement.classList.add(\'image-missing\')"></a><div class="cart-item-main"><span class="product-category">' + esc(p.category) + '</span><h3><a href="product.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.name) + '</a></h3><div class="cart-item-options">' + opts + '</div><div class="cart-item-actions"><div class="quantity-control"><button type="button" data-dec aria-label="Decrease quantity">−</button><span>' + Number(item.qty || 1) + '</span><button type="button" data-inc aria-label="Increase quantity">+</button></div><button type="button" class="remove-item" data-remove>Remove</button></div></div><div class="cart-item-price"><strong>Price on request</strong><span>Confirmed by store</span></div></article>';
    }).join("");
    const oldRows = outdated.map(item => '<article class="cart-item cart-item-outdated"><div class="cart-item-no-image">Updated</div><div class="cart-item-main"><span class="product-category">OLD CATALOG ITEM</span><h3>' + esc(oldNames[item.id] || "Previous product selection") + '</h3><p>This selection belongs to the old generic catalogue. Remove it and choose an exact model before checkout.</p><button type="button" class="remove-item" data-remove-old="' + esc(item.key || item.id) + '">Remove old item</button></div></article>').join("");
    root.innerHTML = '<div class="cart-layout"><div class="cart-items-column"><div class="cart-list-heading"><h2>Your items</h2><span>' + valid.length + ' current item(s)</span></div><div class="cart-items">' + rows + oldRows + '</div><div class="cart-actions-bottom"><a href="shop.html">Continue shopping</a><button type="button" id="clear-cart">Clear cart</button></div></div><aside class="cart-summary"><span class="summary-kicker">ORDER SUMMARY</span><h2>Order overview</h2><div class="summary-row"><span>Products</span><strong>' + valid.reduce((n,item)=>n+Number(item.qty||1),0) + '</strong></div><div class="summary-row"><span>Product prices</span><strong>On request</strong></div><div class="summary-row"><span>Delivery</span><strong>Confirm with store</strong></div><div class="summary-total"><span>Total</span><strong>To be confirmed</strong></div><p>The store will confirm the exact model, condition, availability, price and delivery before accepting your order.</p>' + (outdated.length ? '<button class="btn btn-primary" type="button" disabled>Remove old items to continue</button>' : '<a class="btn btn-primary" href="checkout.html">Continue to checkout</a>') + '<div class="cart-support">Need help choosing? <a href="about.html#contact">Contact the store</a></div></aside></div>';
    root.querySelectorAll("[data-inc]").forEach(button => button.addEventListener("click", () => change(button, 1)));
    root.querySelectorAll("[data-dec]").forEach(button => button.addEventListener("click", () => change(button, -1)));
    root.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => remove(button)));
    root.querySelectorAll("[data-remove-old]").forEach(button => button.addEventListener("click", () => removeOld(button.dataset.removeOld)));
    KAA.$("#clear-cart")?.addEventListener("click", () => { if (confirm("Remove every item from your cart?")) { KAA.saveCart([]); render(); } });
  }
  function change(button, delta) {
    const row = button.closest("[data-key]");
    const key = row.dataset.key;
    const cart = KAA.getCart();
    const item = cart.find(entry => (entry.key || entry.id) === key);
    if (!item) return;
    item.qty = Math.max(1, Math.min(20, Number(item.qty || 1) + delta));
    KAA.saveCart(cart);
    render();
  }
  function remove(button) {
    const key = button.closest("[data-key]").dataset.key;
    KAA.saveCart(KAA.getCart().filter(entry => (entry.key || entry.id) !== key));
    render();
  }
  function removeOld(key) {
    KAA.saveCart(KAA.getCart().filter(entry => (entry.key || entry.id) !== key));
    render();
  }
  render();
});