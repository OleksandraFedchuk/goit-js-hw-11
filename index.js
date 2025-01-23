import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u=s=>{const r=new URLSearchParams({q:s,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},d=new l(".gallery a",{captionsData:"alt",captionDelay:200});function p({webformatURL:s,largeImageURL:r,tags:t,likes:a,views:e,comments:o,downloads:n}){return`<div class="card">
    <div class="card-apperance">
<a href="${r}" class="card-link">
<img src="${s}" alt="${t}">
</a>
</div>
<div class="card-discription">
<p class="discription">Likes:${a}</p>
<p class="discription">Views:${e}</p>
<p class="discription">Comments:${o}</p>
<p class="discription">Downloads:${n}</p>
</div>
</div>`}function f(s,r){const t=s.map(p).join("");r.innerHTML=t,d.refresh()}const i={button:document.querySelector(".btn"),form:document.querySelector(".form"),input:document.querySelector(".input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",m);function m(s){s.preventDefault();const r=s.currentTarget.elements.query.value;if(r===""){c.show({class:"wave-stroke",message:"🚫Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnEscape:!0,closeOnClick:!0,backgroundColor:"#e3545b"});return}console.log(r),i.gallery.innerHTML="",h(),u(r).then(t=>{t.hits.length===0?c.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",color:"#e3545b",position:"topRight"}):f(t.hits,i.gallery)}).catch(t=>{c.show({title:"Error",message:"Something went wrong. Please try again later.",color:"#e3545b",position:"topRight"})}).finally(()=>{g(),i.form.reset()})}function h(){i.loader.classList.remove("hidden")}function g(){i.loader.classList.add("hidden")}
//# sourceMappingURL=index.js.map
