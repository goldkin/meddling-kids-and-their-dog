// ==UserScript==
// @name         Meddling Millennials
// @namespace    https://github.com/goldkin/meddling-kids-and-their-dog
// @version      0.1
// @description  Replace the term "millennial" with something more appropriate
// @match        http*://*/*
// @author       Goldkin
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var els = document.getElementsByTagName("*");
    for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      el.innerHTML = el.innerHTML.replace(/millennials/g, 'those meddling kids and their dog');
      el.innerHTML = el.innerHTML.replace(/Millennials/g, 'Those meddling kids and their dog');
      el.innerHTML = el.innerHTML.replace(/millennial/g, 'that meddling kid and their dog');
      el.innerHTML = el.innerHTML.replace(/Millennial/g, 'That meddling kid and their dog');
    }
})();
