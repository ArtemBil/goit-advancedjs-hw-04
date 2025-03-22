import{a as L,i as c,S as w}from"./assets/vendor-pbuthbrG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h=({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:t,comments:o,downloads:i})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${s}"
      width="360"
      height="200"
    />
  </a>
  <ul>
    <li>
        <h3>Likes</h3>
        <p>${a}</p>
    </li>
    <li>
        <h3>Views</h3>
        <p>${t}</p>
    </li>
    <li>
        <h3>Comments</h3>
        <p>${o}</p>
    </li>
    <li>
        <h3>Downloads</h3>
        <p>${i}</p>
    </li>
  </ul>
</li>
`;function I(r){const e=document.getElementById("gallery"),s=r.map(h).join("");e.insertAdjacentHTML("afterbegin",s)}function $(r){const e=document.getElementById("gallery"),s=r.map(h).join("");e.insertAdjacentHTML("beforeend",s)}const g="Something went wrong with your request. Please try again.",m="49464671-8ab53a49f1e625c6669932451",b="Sorry, there are no images matching your search query. Please try again!",v="We're sorry, but you've reached the end of search results.";async function p(r){try{const{data:e}=await L.get(r);return e}catch(e){console.log(e),c.error({message:g,position:"topRight"})}}const u=document.querySelector("form"),E=document.getElementById("gallery"),d=document.querySelector(".loader"),l=document.querySelector(".load-more"),y=new w("#gallery a",{captions:!0,captionType:"attr",captionDelay:250,showCounter:!1,captionsData:"alt"});let n=1,f="";u.addEventListener("submit",async r=>{r.preventDefault(),n=1;const e=r.target.querySelector("input"),s=`https://pixabay.com/api/?key=${m}&q=${encodeURI(e.value)}&image_type=photo&orientation=horizontal&safesearch=true?page=${n}&per_page=15`;f=e.value,E.innerHTML="",d.classList.add("loading"),l.classList.add("hidden");try{const a=await p(s);if(!a.hits.length)return c.error({message:b,position:"topRight"});I(a.hits),y.refresh(),l.classList.remove("hidden")}catch(a){return console.log(a),c.error({message:g,position:"topRight"})}finally{d.classList.remove("loading"),u.reset()}});l.addEventListener("click",async()=>{n+=1,l.classList.add("hidden"),d.classList.add("loading");const r=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(f)}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=15`;try{const e=await p(r),{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();e.hits.length||(n=1,c.error({message:v,position:"topCenter"})),$(e.hits),y.refresh(),window.scrollBy({top:window.innerHeight-s/2,behavior:"smooth"}),l.classList.remove("hidden")}catch(e){return console.log(e),n=1,c.error({message:g,position:"topRight"})}finally{d.classList.remove("loading")}});
//# sourceMappingURL=index.js.map
