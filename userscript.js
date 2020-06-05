// ==UserScript==
// @name         Zoom Prevent Client Autodownload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*zoom.us/*
// @grant        none
// ==/UserScript==
let ohNoYouDont = document.getElementById("download_url");
ohNoYouDont.value = "";
