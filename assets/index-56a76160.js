(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="/logo.svg";function l(s){let r=0;const o=n=>{r=n,s.innerHTML=`count is ${r}`};s.addEventListener("click",()=>o(r+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://josfeenstra.nl" target="_blank">
      <img src="${c}" class="logo" alt="Geofront Logo" />
    </a>
    <h1>Geofront</h1>
    <a href="https://josfeenstra.nl">To old site</a>
    <br>
    <br>
    <br>
    <br>
    <p class="more soon">
    🚧 Renovating... 🚧
    </p>
  </div>
`;l(document.querySelector("#counter"));
