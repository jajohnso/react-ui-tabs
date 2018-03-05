/**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     *
     * https://davidwalsh.name/javascript-debounce-function
     *
     * @method debounce
     * @static
     * @param {function} func
     * @param {number} wait
     * @param {boolean} immediate
     * @return {class} Helpers
     */
export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments; // eslint-disable-line
        const later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}

export function noop() {
    return {};
}
