import{S as B,a as E,i as h}from"./assets/vendor-DjNg1bp9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const g=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more"),$=new B(".gallery a",{captionsData:"alt",captionDelay:250});function v(e){const r=e.map(({webformatURL:s,largeImageURL:i,tags:t,likes:o,views:a,comments:M,downloads:P})=>`<li class="gallery-item">
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
    <p class="info-value">${M}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Downloads</p>
    <p class="info-value">${P}</p>
  </div>
</div>
    </li>
    `).join("");g.insertAdjacentHTML("beforeend",r),$.refresh()}function R(){g.innerHTML=""}function L(){c&&c.classList.remove("is-hidden")}function b(){c&&c.classList.add("is-hidden")}function w(){d&&d.classList.remove("is-hidden")}function p(){d&&d.classList.add("is-hidden")}const x="https://pixabay.com/api",H="54283114-39be9c7278f058101fc4d5798",I=15;async function S(e,r){const s={key:H,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:I,page:r};return(await E.get(x,{params:s})).data}const y=document.querySelector(".form"),_=document.querySelector('[type="submit"]'),A=document.querySelector(".load-more"),q="topRight";let u=1,f="",l=0,n=0;_.addEventListener("click",D);A.addEventListener("click",N);async function D(e){e.preventDefault();const r=y.elements["search-text"].value.trim();if(r){f=r,u=1,l=0,n=0,R(),L();try{const s=await S(f,u);l=s.totalHits,n+=s.hits.length,T(s.hits),n<l?w():n>0&&showEndMessage(),O()}catch{m("Oops, something went wrong. Please try again later.")}finally{b(),y.reset()}}}async function N(){u+=1,p(),L();try{const e=await S(f,u);n+=e.hits.length,v(e.hits),O(),n<l?w():(h.info({message:"We're sorry, but you've reached the end of search results.",position:q}),p())}catch{m("Oops, something went wrong. Please try again later.")}finally{b()}}function m(e){h.error({message:e,position:q})}function T(e){if(!e.length){m("Sorry, there are no images matching your search query. Please try again!");return}v(e)}function O(){const e=document.querySelector(".gallery-item");if(!e)return;const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
