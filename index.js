import{S as M,a as B,i as y}from"./assets/vendor-DjNg1bp9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more"),E=new M(".gallery a",{captionsData:"alt",captionDelay:250});function L(e){const r=e.map(({webformatURL:s,largeImageURL:i,tags:t,likes:o,views:a,comments:O,downloads:P})=>`<li class="gallery-item">
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
    `).join("");v.insertAdjacentHTML("beforeend",r),E.refresh()}function $(){v.innerHTML=""}function w(){c&&c.classList.remove("is-hidden")}function b(){c&&c.classList.add("is-hidden")}function S(){d&&d.classList.remove("is-hidden")}function u(){d&&d.classList.add("is-hidden")}const R="https://pixabay.com/api",x="54283114-39be9c7278f058101fc4d5798",H=15;async function q(e,r){const s={key:x,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:H,page:r};return(await B.get(R,{params:s})).data}const m=document.querySelector(".form"),I=document.querySelector(".load-more"),g="topRight";let f=1,h="",l=0,n=0;m.addEventListener("click",_);I.addEventListener("click",A);async function _(e){e.preventDefault(),u();const r=m.elements["search-text"].value.trim();if(!r){p("Please enter a search query.");return}h=r,f=1,l=0,n=0,$(),w();try{const s=await q(h,f);l=s.totalHits,n+=s.hits.length,N(s.hits),n<l?S():n>0&&D()}catch{p("Oops, something went wrong. Please try again later.")}finally{b(),m.reset()}}async function A(){f+=1,u(),w();try{const e=await q(h,f);n+=e.hits.length,L(e.hits),T(),n<l?S():(y.info({message:"We're sorry, but you've reached the end of search results.",position:g}),u())}catch{p("Oops, something went wrong. Please try again later.")}finally{b()}}function p(e){y.error({message:e,position:g})}function D(){u(),y.info({message:"We're sorry, but you've reached the end of search results.",position:g})}function N(e){if(!e.length){p("Sorry, there are no images matching your search query. Please try again!");return}L(e)}function T(){const e=document.querySelector(".gallery-item");if(!e)return;const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
