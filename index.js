import{S as p,a as m,i as l}from"./assets/vendor-rCqJG_pJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery"),a=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:d})=>`<li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${e}"
        />
      </a>
      <div class="info">
  <div class="info-item">
    <p class="info-label">Likes</p>
    <p class="info-value">${t}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Views</p>
    <p class="info-value">${s}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Comments</p>
    <p class="info-value">${f}</p>
  </div>
  <div class="info-item">
    <p class="info-label">Downloads</p>
    <p class="info-value">${d}</p>
  </div>
</div>
    </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),y.refresh()}function h(){u.innerHTML=""}function v(){a&&a.classList.remove("is-hidden")}function b(){a&&a.classList.add("is-hidden")}const L="https://pixabay.com/api",S="54283114-39be9c7278f058101fc4d5798";function q(o){const r={key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(L,{params:r}).then(i=>i.data)}const c=document.querySelector(".form"),P=document.querySelector('[type="submit"]');P.addEventListener("click",w);function w(o){o.preventDefault();const r=c.elements["search-text"].value.trim();if(!r){l.error({message:"Please enter a search query.",position:"topRight"});return}h(),v(),q(r).then(i=>{if(!i.hits.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits)}).catch(()=>{l.error({message:"Oops, something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),c.reset()})}
//# sourceMappingURL=index.js.map
