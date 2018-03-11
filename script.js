// ==UserScript==
// @name         Twitch Volume Mute Fix
// @namespace    https://github.com/Nyqi/twitch-volume-safari-fix
// @version      1.0.0
// @description  Fixes bug when volume is automatically muted on Safari
// @author       Zedgar
// @match        *://twitch.tv/*
// @match        *://www.twitch.tv/*
// @match        *://player.twitch.tv/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @license      MIT
// @run-at       document-end
// @grant        none
// ==/UserScript==

$(document).ready(() => {
  $('.qa-control-volume').click();
});
