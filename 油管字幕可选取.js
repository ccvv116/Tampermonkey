// ==UserScript==
// @name         油管字幕可选取
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  let css=`
  .caption-window{
   -moz-user-select: text !important;
   -ms-user-select: text !important;
   -webkit-user-select: text !important;
   cursor:text !important;
  }
  `
  GM_addStyle(css)
})();
