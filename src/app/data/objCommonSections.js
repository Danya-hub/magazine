export let objCommonSections = {};

function _setELemInObj() {
    Array(...arguments).forEach(e => {
        let _elem = document.querySelector(e);

        if (_elem == null) {
            return
        }

        let section = _elem.classList.value == '' ? _elem.tagName.toLowerCase() : _elem.className;
        objCommonSections[section] = _elem;
    });
}

_setELemInObj(
    '.header',
    '.topHeader',
    '.filter',
    'footer',
    '.navFunctionsList',
    '.windowBasket',
)