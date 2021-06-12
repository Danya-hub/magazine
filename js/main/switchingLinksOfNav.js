const switchingLinksOfNav = (parentElem, elemToAddContent, obj) => {
    let childElem = [];
    let activeLink = [];

    function __init__() {
        parentElem.forEach(e => childElem.push(Array(...e.querySelectorAll('a'))));

        _setActiveLink(0);
        _addContent(0, obj, elemToAddContent);
        for (const iterator of childElem) {
            iterator.forEach(elem => elem.addEventListener('click', (e) => {
                _addContent(e.currentTarget.id, obj, elemToAddContent);
                _setActiveLink(e.currentTarget);
            }));
        }
    }

    function _isNum(value) {
        return typeof value == 'number';
    }

    function _setActiveLink(value) {
        let elem = _isNum(value) ? childElem.map(e => e[value]) : value;

        elem.length ? elem.forEach(e => e.style.textDecoration = 'underline') : elem.style.textDecoration = 'underline';
        activeLink.push(elem);

        if (activeLink.length > 1) {
            let oldElem = activeLink.shift();
            oldElem.length ? oldElem.forEach(e => e.removeAttribute('style')) : oldElem.removeAttribute('style');
        }
    }

    function _addContent(value, obj, elemToAddContent) {
        elemToAddContent.innerHTML = _isNum(value) ? Object.values(obj)[value] : obj[value];
    }

    __init__();
}

export default switchingLinksOfNav;