document.addEventListener("DOMContentLoaded",()=>{
 const categories=[
  ["Business laptops","Business and study laptops","Business laptops","hp-elitebook-840-g8"],
  ["Gaming laptops","Performance laptops for gaming","Gaming laptops","hp-victus-15"],
  ["MacBooks","Apple MacBook Air and Pro","MacBooks","macbook-air-m2-13"],
  ["iPhones","Apple iPhone models","iPhones","iphone-13"],
  ["Samsung phones","Galaxy A and S series","Samsung phones","samsung-galaxy-s24"],
  ["CCTV cameras","Dome, bullet and PTZ camera types","CCTV cameras","cctv-dome-camera"]
 ];
 const target=KAA.$("#home-categories");
 if(target)target.innerHTML=categories.map(([title,desc,category,id])=>{
  const p=KAA.productById(id);
  return '<a class="category-card" href="shop.html?category='+encodeURIComponent(category)+'"><div class="category-card-copy"><small>'+desc+'</small><h3>'+title+'</h3><span class="category-count">'+KAA_PRODUCTS.filter(x=>x.category===category).length+' listings</span></div><img src="'+p.image+'" alt="'+title+' product example" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add(\'image-missing\')"></a>';
 }).join("");
 const hero=KAA.productById("macbook-air-m2-13");
 if(hero){KAA.$("#home-hero-image").src=hero.image;KAA.$("#home-hero-image").alt=hero.name;KAA.$("#home-hero-name").textContent=hero.name;KAA.$("#home-hero-product").href="product.html?id="+encodeURIComponent(hero.id)}
 const featured=KAA.$("#featured-products");
 if(featured)featured.innerHTML=KAA_PRODUCTS.slice(0,8).map(KAA.productCard).join("");
 const search=new URLSearchParams(location.search).get("q");
 if(search)KAA.$("#home-search-input").value=search;
});