// ==UserScript==
// @name         Remove Today's Hot Search on Tongyi Aliyun
// @namespace    https://github.com/qqlovolpp/remove_tongyi
// @version      0.2
// @description  try to remove the "Today's Hot Search" component from tongyi.aliyun.com
// @author       jjh
// @match        https://tongyi.aliyun.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove the "Today's Hot Search" component
    function removeHotSearchComponent() {
        // Select the element by its class name or any other unique identifier
        const hotSearchElement = document.querySelector('.newsWrapper--dBjtsBS2');
        if (hotSearchElement) {
            hotSearchElement.remove();
        }
        const Element = document.querySelector('.cardHeader--agdHGMm_');
        if (Element) {
            Element.remove();
        }
    }

    // Run the function when the page has fully loaded
    window.addEventListener('load', removeHotSearchComponent);
})();


