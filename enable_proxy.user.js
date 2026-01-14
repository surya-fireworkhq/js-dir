// ==UserScript==
// @name         Enable Proxy
// @namespace    http://tampermonkey.net/
// @version      2026-01-14
// @description  try to take over the world!
// @author       You
// @match        https://*.com/*
// @icon         https://avatars.githubusercontent.com/u/12287519?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  // Create button
  const btn = document.createElement("button");
  btn.innerText = "Enable Proxy";
  btn.style.position = "fixed";
  btn.style.top = "200px";          // top of page
  btn.style.right = "10px";        // right corner
  btn.style.zIndex = "2147483647"; // maximum z-index
  btn.style.padding = "10px 16px";
  btn.style.borderRadius = "18px";
  btn.style.border = "none";
  btn.style.background = "#ff5722";
  btn.style.color = "white";
  btn.style.fontSize = "14px";
  btn.style.cursor = "pointer";
  btn.style.boxShadow = "0 2px 12px rgba(0,0,0,0.35)";

  if(!(window.location.href.includes("fwparam_api_host"))){
      btn.onclick = function () {
          const url = new URL(window.location.href);
          url.searchParams.set("fwparam_api_host", "https://api.fw.tv");
          url.searchParams.set("fwparam_api_cache", "false");
          window.location.href = url.toString(); // refresh with param
      };
      document.body.appendChild(btn);
  }
})();
