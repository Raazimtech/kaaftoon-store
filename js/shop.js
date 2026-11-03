document.addEventListener("DOMContentLoaded",()=>{
 const search=KAA.$("#catalog-search"),sort=KAA.$("#sort-products"),grid=KAA.$("#shop-products"),count=KAA.$("#catalog-count"),cats=KAA.$("#category-filters"),brands=KAA.$("#brand-filters"),panel=KAA.$("#filter-panel");
 const params=new URLSearchParams(location.search);let category=params.get("category")||"",brand="",query=params.get("q")||"";
 search.value=query;
 const unique=values=>[...new Set(values)].sort((a,b)=>a.localeCompare(b));
 const checks=(values,name,selected)=>values.map(v=>'<label class="filter-option"><input type="radio" name="'+name+'" value="'+KAA.escapeHTML(v)+'" '+(v===selected?'checked':'')+'> '+KAA.escapeHTML(v)+'</label>').join("");
 cats.innerHTML=checks(unique(KAA_PRODUCTS.map(p=>p.category)),"category",category);
 brands.innerHTML=checks(unique(KAA_PRODUCTS.map(p=>p.brand).filter(Boolean)),"brand",brand);
 function render(){
  let list=KAA_PRODUCTS.filter(p=>(!category||p.category===category)&&(!brand||p.brand===brand)&&(!query||[p.name,p.brand,p.category,p.description,p.type].join(" ").toLowerCase().includes(query.toLowerCase())));
  if(sort.value==="name-asc")list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sort.value==="name-desc")list.sort((a,b)=>b.name.localeCompare(a.name));
  if(sort.value==="category")list.sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name));
  grid.innerHTML=list.map(KAA.productCard).join("");
  count.textContent=list.length+" "+(list.length===1?"product":"products");
  KAA.$("#no-results").classList.toggle("hidden",list.length>0);
  KAA.$("#active-filter-count").textContent=[category,brand].filter(Boolean).length?String([category,brand].filter(Boolean).length):"";
  KAA.$("#applied-filters").innerHTML=[category,brand].filter(Boolean).map(v=>'<button class="filter-chip" type="button" data-clear="'+KAA.escapeHTML(v)+'">'+KAA.escapeHTML(v)+' <span aria-hidden="true">×</span></button>').join("");
  const heading=KAA.$("#catalog-heading");
  if(heading)heading.textContent=category||"All products";
  const desc=KAA.$("#catalog-description");
  if(desc)desc.textContent=query?'Search results for "'+query.replace(/[<>]/g,"")+'"':category?"Browse "+category.toLowerCase()+" at Kaaftoon Store.":"Explore model-specific laptops, MacBooks, smartphones and CCTV camera types.";
 }
 cats.addEventListener("change",e=>{category=e.target.value;render()});
 brands.addEventListener("change",e=>{brand=e.target.value;render()});
 search.addEventListener("input",()=>{query=search.value;render()});
 sort.addEventListener("change",render);
 KAA.$("#clear-filters").addEventListener("click",()=>{category="";brand="";query="";search.value="";cats.querySelectorAll("input").forEach(x=>x.checked=false);brands.querySelectorAll("input").forEach(x=>x.checked=false);render()});
 KAA.$("#reset-search").addEventListener("click",()=>KAA.$("#clear-filters").click());
 KAA.$("#applied-filters").addEventListener("click",e=>{const button=e.target.closest("[data-clear]");if(!button)return;const v=button.dataset.clear;if(category===v){category="";cats.querySelectorAll("input").forEach(x=>x.checked=false)}if(brand===v){brand="";brands.querySelectorAll("input").forEach(x=>x.checked=false)}render()});
 KAA.$("#filter-toggle").addEventListener("click",()=>panel.classList.add("open"));
 KAA.$("#close-filters").addEventListener("click",()=>panel.classList.remove("open"));
 render();
});