document.addEventListener("DOMContentLoaded", () => {
  const root = KAA.$("#checkout-content");
  const cart = KAA.getCart();
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const items = cart.map(item => ({item, product: KAA.productById(item.id)})).filter(entry => entry.product);

  if (!items.length) {
    root.innerHTML = '<div class="empty-cart"><h2>Your cart is empty</h2><a class="btn btn-primary" href="shop.html">Browse products</a></div>';
    return;
  }

  const orderRows = items.map(({item, product}) =>
    '<div class="checkout-product"><span><strong>' + escapeHTML(product.name) + '</strong><br>' +
    Number(item.qty) + ' × ' + escapeHTML(Object.values(item.opts || {}).join(", ")) +
    '</span><span>Confirm price</span></div>'
  ).join("");

  root.innerHTML =
    '<div class="checkout-layout"><form id="checkout-form" class="checkout-form">' +
    '<div class="form-field"><label for="customer-name">Your name *</label><input id="customer-name" name="name" required autocomplete="name" placeholder="Full name"></div>' +
    '<div class="form-field"><label for="customer-phone">Phone number *</label><input id="customer-phone" name="phone" required autocomplete="tel" placeholder="+252 ..."></div>' +
    '<div class="form-field full"><label for="customer-location">City / delivery location *</label><input id="customer-location" name="location" required autocomplete="address-level2" placeholder="Where should the store contact you?"></div>' +
    '<div class="form-field full"><label for="customer-notes">Additional notes (optional)</label><textarea id="customer-notes" name="notes" rows="4" placeholder="Preferred delivery, questions or other details"></textarea></div>' +
    '<div class="form-error hidden" id="form-error" role="alert"></div>' +
    '<div class="form-field full"><button class="btn btn-primary" type="submit">Continue to WhatsApp ↗</button>' +
    '<p class="price-note">No payment is collected on this website. The store will confirm the order and payment details with you.</p></div></form>' +
    '<aside class="checkout-summary"><h2>Your order</h2>' + orderRows +
    '<div class="checkout-hint">Your WhatsApp message includes each product, selected option and quantity. The store will confirm prices and availability.</div>' +
    '<a class="text-link" href="cart.html">Edit cart ↗</a></aside></div>';

  KAA.$("#checkout-form").addEventListener("submit", event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const customer = Object.fromEntries(new FormData(event.currentTarget));
    const message = KAA.orderMessage(cart, customer);
    const url = KAA.whatsappUrl(message);
    if (!url) {
      KAA.toast("The store WhatsApp number is not configured.");
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  });
});