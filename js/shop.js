document.addEventListener("DOMContentLoaded",()=>{
 const search=KAA.$("#catalog-search"),sort=KAA.$("#sort-products"),grid=KAA.$("#shop-products"),count=KAA.$("#catalog-count"),cats=KAA.$("#category-filters"),brands=KAA.$("#brand-filters"),panel=KAA.$("#filter-panel"),toggle=KAA.$("#filter-toggle");
 const params=new URLSearchParams(location.search);let category=params.get("category")||"",brand="",query=params.get("q")||"";
 search.value=query;
 const unique=values=>[...new Set(values)].sort((a,b)=>a.localeCompare(b));
 const checks=(values,name,selected)=>values.map(v=>'<label class="filter-option"><input type="radio" name="'+name+'" value="'+KAA.escapeHTML(v)+'" '+(v===selected?'checked':'')+'> '+KAA.escapeHTML(v)+'</label>').join("");
 cats.innerHTML=checks(unique(KAA_PRODUCTS.map(p=>p.category)),"category",category);
 brands.innerHTML=checks(unique(KAA_PRODUCTS.map(p=>p.brand).filter(Boolean)),"brand",brand);
 function closeFilters(){panel.classList.remove("open");document.body.classList.remove("filter-open");toggle.setAttribute("aria-expanded","false")}
 function openFilters(){panel.classList.add("open");document.body.classList.add("filter-open");toggle.setAttribute("aria-expanded","true");KAA.$("#close-filters").focus()}
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
  KAA.$("#catalog-heading").textContent=category||"All products";
  KAA.$("#catalog-description").textContent=query?'Search results for "'+query.replace(/[<>]/g,"")+'"':category?"Browse "+category.toLowerCase()+" at Kaaftoon Store.":"Explore model-specific laptops, MacBooks, smartphones and CCTV camera types.";
 }
 cats.addEventListener("change",e=>{category=e.target.value;render();if(matchMedia("(max-width: 760px)").matches)closeFilters()});
 brands.addEventListener("change",e=>{brand=e.target.value;render();if(matchMedia("(max-width: 760px)").matches)closeFilters()});
 search.addEventListener("input",()=>{query=search.value;render()});
 sort.addEventListener("change",render);
 KAA.$("#clear-filters").addEventListener("click",()=>{category="";brand="";query="";search.value="";cats.querySelectorAll("input").forEach(x=>x.checked=false);brands.querySelectorAll("input").forEach(x=>x.checked=false);render();closeFilters()});
 KAA.$("#reset-search").addEventListener("click",()=>KAA.$("#clear-filters").click());
 KAA.$("#applied-filters").addEventListener("click",e=>{const button=e.target.closest("[data-clear]");if(!button)return;const v=button.dataset.clear;if(category===v){category="";cats.querySelectorAll("input").forEach(x=>x.checked=false)}if(brand===v){brand="";brands.querySelectorAll("input").forEach(x=>x.checked=false)}render()});
 toggle.addEventListener("click",()=>panel.classList.contains("open")?closeFilters():openFilters());
 KAA.$("#close-filters").addEventListener("click",closeFilters);
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.classList.contains("open")){closeFilters();toggle.focus()}});
 document.addEventListener("click",e=>{if(panel.classList.contains("open")&&!panel.contains(e.target)&&!toggle.contains(e.target))closeFilters()});
 render();
});