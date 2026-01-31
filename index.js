import{S as M,a as B,i as y}from"./assets/vendor-DjNg1bp9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v=document.querySelector(".gallery"),c=document.querySelector(".loader"),u=document.querySelector(".load-more"),E=new M(".gallery a",{captionsData:"alt",captionDelay:250});function L(e){const r=e.map(({webformatURL:s,largeImageURL:i,tags:t,likes:o,views:a,comments:O,downloads:P})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${t}"
        />
      </a>
      <div class="info">
  <div class="info-item">
    <p class="info-label">Likes</p>
    <p class="info-value">${o}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Views</p>
    <p class="info-value">${a}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Comments</p>
    <p class="info-value">${O}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Downloads</p>
    <p class="info-value">${P}</p>
  </div>
</div>
    </li>
    `).join("");v.insertAdjacentHTML("beforeend",r),E.refresh()}function $(){v.innerHTML=""}function b(){c&&c.classList.remove("is-hidden")}function w(){c&&c.classList.add("is-hidden")}function S(){u&&u.classList.remove("is-hidden")}function d(){u&&u.classList.add("is-hidden")}const R="https://pixabay.com/api",x="54283114-39be9c7278f058101fc4d5798",H=15;async function q(e,r){const s={key:x,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:H,page:r};return(await B.get(R,{params:s})).data}const g=document.querySelector(".form"),I=document.querySelector('[type="submit"]'),_=document.querySelector(".load-more"),h="topRight";let f=1,p="",l=0,n=0;I.addEventListener("click",A);_.addEventListener("click",D);async function A(e){e.preventDefault(),d();const r=g.elements["search-text"].value.trim();if(!r){m("Please enter a search query.");return}p=r,f=1,l=0,n=0,$(),b();try{const s=await q(p,f);l=s.totalHits,n+=s.hits.length,T(s.hits),n<l?S():n>0&&N()}catch{m("Oops, something went wrong. Please try again later.")}finally{w(),g.reset()}}async function D(){f+=1,d(),b();try{const e=await q(p,f);n+=e.hits.length,L(e.hits),j(),n<l?S():(y.info({message:"We're sorry, but you've reached the end of search results.",position:h}),d())}catch{m("Oops, something went wrong. Please try again later.")}finally{w()}}function m(e){y.error({message:e,position:h})}function N(){d(),y.info({message:"We're sorry, but you've reached the end of search results.",position:h})}function T(e){if(!e.length){m("Sorry, there are no images matching your search query. Please try again!");return}L(e)}function j(){const e=document.querySelector(".gallery-item");if(!e)return;const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
