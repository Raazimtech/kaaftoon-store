# Kaaftoon Store

A responsive, frontend-only electronics storefront built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — home, categories, featured products
- `shop.html` — searchable catalog and category/brand filters
- `product.html` — product details and configurable options
- `cart.html` — cart review and quantity editing
- `checkout.html` — customer details and WhatsApp order message
- `about.html` — store information and contact

## Setup before launch
1. Edit `js/config.js` and set `WHATSAPP_NUMBER` to the store's full international number, digits only (e.g. 252XXXXXXXXX). Without it, checkout displays a copyable order message instead of opening WhatsApp.
2. Review `js/products.js`: replace starter products with the actual models stocked by the business; verify every specification, option and product image.
3. Replace externally hosted preview images with product photos the business is authorized to use. Image URLs currently serve as illustrative starter assets and can change or block hotlinking.
4. Confirm business location, opening hours, delivery, return and warranty policies before publishing claims about them.
5. Enable GitHub Pages from Settings → Pages → Deploy from branch → `main` → `/(root)`.

## Important notes
- No backend, admin panel, database or online payment integration.
- Cart is stored in the visitor's browser using LocalStorage.
- Prices and stock are not invented; checkout asks the store to confirm them directly.
- WhatsApp checkout opens a pre-filled message; the customer must press Send.
- Product images/specifications are starter content and must be checked against actual inventory.
- Use only images with permission for commercial use.

## Brand
- Deep pink: `#C2185B`
- Navy: `#14243B`
- Light grey: `#F5F6F8`
- White: `#FFFFFF`
- Green is reserved for WhatsApp actions.
