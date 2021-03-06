import Vue from 'vue';

export function addEventListenerBinding (element, event, handler) {
    if (element && event && handler) {
        element.addEventListener(event, handler, false);
    }
}

export function attachEventBinding (element, event, handler) {
    if (element && event && handler) {
        element.attachEvent('on' + event, handler);
    }
}

export const on = (function() {
    if (!Vue.$isServer && typeof window !== 'undefined' && window.document.addEventListener) {
        return addEventListenerBinding;
    } else {
        return attachEventBinding;
    }
})();