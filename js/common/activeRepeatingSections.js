export let objOfInfoAboutSections = {};

function _setELemInObj() {
    Array(...arguments).forEach(e => {
        let _elem = document.querySelector(e);

        if (_elem == null) {
            return
        }

        let section = _elem.classList.value == '' ? _elem.tagName.toLowerCase() : _elem.className;
        objOfInfoAboutSections[section] = _elem;
    });
}

_setELemInObj(
    '.header',
    '.topHeader',
    '.filter',
    'footer',
    // '.sidePanel',
    // '.navFunctionsList',
    '.windowBasket',
)