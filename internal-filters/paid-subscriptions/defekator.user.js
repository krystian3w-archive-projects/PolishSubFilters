// ==UserScript==
// @name         Defekator
// @namespace    Def
// @version      0.0
// @description  Ochrona przed przekierowaniem na super pułapki
// @author       KonoromiHimaries
// @match        *://*.test.pl/*
// @grant        none
// @run-at       document-start
// @user-agent   Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
// @updateURL    
// @downloadURL  
// ==/UserScript==
Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
});
