document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || KAA_PRODUCTS[0].id;
  const product = KAA.productById(id);
  const root = KAA.$("#product-detail");
  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));

  if (!product) {
    document.title = "Product not found | Kaaftoon Store";
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.content = "noindex,follow";
    root.innerHTML = '<div class="empty-state"><h2>Product not found</h2><a class="btn btn-primary" href="shop.html">Back to shop</a></div>';
    return;
  }

  const canonical = "https://raazimtech.github.io/kaaftoon-store/product.html?id=" + encodeURIComponent(product.id);
  document.title = product.name + " | Kaaftoon Store";
  const setMeta = (key, value, property = false) => {
    const selector = property ? 'meta[property="' + key + '"]' : 'meta[name="' + key + '"]';
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(property ? "property" : "name", key);
      document.head.append(element);
    }
    element.content = value;
  };
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) canonicalLink.href = canonical;
  setMeta("description", product.name + " - " + product.description + " View product configurations and enquire about current price and availability from Kaaftoon Store.");
  setMeta("og:title", product.name + " | Kaaftoon Store", true);
  setMeta("og:description", product.description, true);
  setMeta("og:url", canonical, true);
  setMeta("og:image", product.image, true);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {"@type": "Brand", "name": product.brand},
    "category": product.category,
    "url": canonical
  };
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify(schema);
  document.head.append(ld);

  KAA.$("#product-breadcrumbs").innerHTML =
    '<a href="index.html">Home</a><span>/</span><a href="shop.html">Shop</a><span>/</span><span>' +
    escapeHTML(product.name) + '</span>';

  const options = {};
  const groups = product.options.map((option, groupIndex) =>
    '<div class="option-group"><label>' + escapeHTML(option.label) + '</label><div class="option-pills">' +
    option.values.map((value, valueIndex) =>
      '<button type="button" class="option-pill ' + (valueIndex === 0 ? "selected" : "") +
      '" data-group="' + groupIndex + '" data-value="' + escapeHTML(value) + '">' +
      escapeHTML(value) + '</button>'
    ).join("") + '</div></div>'
  ).join("");

  product.options.forEach(option => { options[option.label] = option.values[0]; });
  root.innerHTML =
    '<div class="product-detail-layout"><div class="detail-gallery"><img id="detail-product-image" src="' +
    escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" loading="eager"><span class="product-tag">' +
    escapeHTML(product.tag) + '</span></div><div class="detail-copy"><span class="product-category">' +
    escapeHTML(product.category) + ' / ' + escapeHTML(product.brand) + '</span><h1>' +
    escapeHTML(product.name) + '</h1><p class="product-description">' + escapeHTML(product.description) +
    '</p><div class="detail-note">Pricing and exact configurations are confirmed by the store. Select your preferences and send an enquiry.</div>' +
    groups + '<div class="quantity-row"><strong style="font-size:11px">Quantity</strong><div class="quantity-control">' +
    '<button type="button" id="qty-minus" aria-label="Decrease quantity">−</button><span id="qty-value">1</span>' +
    '<button type="button" id="qty-plus" aria-label="Increase quantity">+</button></div></div><div class="detail-actions">' +
    '<button class="btn btn-primary" id="add-cart" type="button">Add to cart</button>' +
    '<button class="btn btn-secondary" id="buy-now" type="button">Buy now ↗</button></div><div class="spec-list">' +
    product.specs.map(spec => '<div class="spec-row"><span>' + escapeHTML(spec[0]) + '</span><strong>' +
      escapeHTML(spec[1]) + '</strong></div>').join("") + '</div></div></div>';

  const detailImage = KAA.$("#detail-product-image");
  detailImage.addEventListener("error", () => { detailImage.src = "assets/images/product-placeholder.svg"; }, {once:true});

  root.querySelectorAll(".option-pill").forEach(button => {
    button.addEventListener("click", () => {
      root.querySelectorAll('[data-group="' + button.dataset.group + '"]').forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
      options[product.options[Number(button.dataset.group)].label] = button.dataset.value;
    });
  });

  let quantity = 1;
  KAA.$("#qty-minus").addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    KAA.$("#qty-value").textContent = quantity;
  });
  KAA.$("#qty-plus").addEventListener("click", () => {
    quantity = Math.min(20, quantity + 1);
    KAA.$("#qty-value").textContent = quantity;
  });
  KAA.$("#add-cart").addEventListener("click", () => KAA.addToCart(product.id, options, quantity));
  KAA.$("#buy-now").addEventListener("click", () => {
    KAA.addToCart(product.id, options, quantity);
    location.href = "checkout.html";
  });

  const related = KAA.$("#related-products");
  related.innerHTML = KAA_PRODUCTS.filter(item => item.id !== product.id).slice(0, 3).map(KAA.productCard).join("");
});