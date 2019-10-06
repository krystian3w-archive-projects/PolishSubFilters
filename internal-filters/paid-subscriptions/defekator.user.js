// ==UserScript==
// @name         Defekator
// @namespace    Def
// @version      0.1
// @description  Ochrona przed przekierowaniem na skomplikowane pułapki
// @author       KonoromiHimaries
// @match        *://*.test.pl/*
// @grant        none
// @run-at       document-start
// @user-agent   Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
// @updateURL    https://github.com/KonoromiHimaries/PolishSubFilters/raw/master/internal-filters/paid-subscriptions/defekator.user.js
// @downloadURL  https://github.com/KonoromiHimaries/PolishSubFilters/raw/master/internal-filters/paid-subscriptions/defekator.user.js
// ==/UserScript==
Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
});
