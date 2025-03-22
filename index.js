import{a as L,i as l,S as w}from"./assets/vendor-pbuthbrG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h=({webformatURL:r,largeImageURL:e,tags:s,likes:n,views:t,comments:o,downloads:i})=>`
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
        <p>${n}</p>
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
`;function I(r){const e=document.getElementById("gallery"),s=r.map(h).join("");e.insertAdjacentHTML("afterbegin",s)}function $(r){const e=document.getElementById("gallery"),s=r.map(h).join("");e.insertAdjacentHTML("beforeend",s)}const g="Something went wrong with your request. Please try again.",m="49464671-8ab53a49f1e625c6669932451",b="Sorry, there are no images matching your search query. Please try again!",E="We're sorry, but you've reached the end of search results.";async function p(r){try{const{data:e}=await L.get(r);return e}catch(e){console.log(e),l.error({message:g,position:"topRight"})}}const u=document.querySelector("form"),q=document.getElementById("gallery"),d=document.querySelector(".loader"),c=document.querySelector(".load-more"),y=new w("#gallery a",{captions:!0,captionType:"attr",captionDelay:250,showCounter:!1,captionsData:"alt"});let a=1,f="";u.addEventListener("submit",async r=>{r.preventDefault();const e=r.target.querySelector("input"),s=`https://pixabay.com/api/?key=${m}&q=${encodeURI(e.value)}&image_type=photo&orientation=horizontal&safesearch=true?page=${a}&per_page=15`;f=e.value,q.innerHTML="",d.classList.add("loading"),u.reset(),a=1;try{const n=await p(s);if(c.classList.remove("hidden"),d.classList.remove("loading"),!n.hits.length)return l.error({message:b,position:"topRight"});I(n.hits),y.refresh()}catch(n){return console.log(n),l.error({message:g,position:"topRight"})}});c.addEventListener("click",async()=>{a+=1;const r=`https://pixabay.com/api/?key=${m}&q=${encodeURIComponent(f)}&image_type=photo&orientation=horizontal&safesearch=true&page=${a}&per_page=15`;try{const e=await p(r),{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();e.hits.length||(c.classList.add("hidden"),a=1,l.error({message:E,position:"topCenter"})),$(e.hits),y.refresh(),window.scrollBy({top:window.innerHeight-s/2,behavior:"smooth"})}catch(e){return console.log(e),a=1,l.error({message:g,position:"topRight"})}});
//# sourceMappingURL=index.js.map
