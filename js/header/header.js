const header = (objOfActiveSection) => {
    let buttons = [];

    function __init__() {
        const blackout = document.querySelector('.blackout');
        const body = document.querySelector('body');
        let heigthOfFilter = 0;
        buttons.push(..._getElemFromParentElem('button'));
        Object.values(objOfActiveSection).find(e => e.className == 'filter' ? heigthOfFilter = disableFilter(e) : null);
    
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', (e) => {
                let parentElem = e.currentTarget.parentNode;
                let id = e.currentTarget.id;

                switch (id) {
                    case 'openBtn':
                        if (!_hasElementClass(document.querySelector('.navFunctionsList'), 'activeWindow')) {
                            _openWindow(document.querySelector('.navFunctionsList'), 'activeWindow');
                            _openWindow(blackout, 'animatedOpening');
                            body.style.overflowY = 'hidden';
                        }

                        if (_hasElementClass(document.querySelector('.navFunctionsList'), 'activeFilter')) {
                            _closeWindow(document.querySelector('.navFunctionsList'), 'activeFilter');
                        }
                        break;

                    case 'closeBtn':
                        if (_hasElementClass(document.querySelector('.navFunctionsList'), 'activeWindow')) {
                            _closeWindow(document.querySelector('.navFunctionsList'), 'activeWindow');
                            _closeWindow(blackout, 'animatedOpening');
                            body.style.overflowY = 'visible';
                        }
                        break;

                    case 'filterButton':
                        let form = parentElem.querySelector('#filterForm');

                        if (parseInt(form.style.height) == 0) {
                            _setHeightForElem(form, heigthOfFilter);
                        } else {
                            _setHeightForElem(form, 0);
                        }
                        break;

                    case 'openBasket':
                        if (!_hasElementClass(objOfActiveSection.windowBasket, 'activeWindow')) {
                            _openWindow(objOfActiveSection.windowBasket, 'activeWindow');
                            _openWindow(blackout, 'animatedOpening');
                            body.style.overflowY = 'hidden';
                        }
                        break;

                    case 'closeBasket':
                        if (_hasElementClass(objOfActiveSection.windowBasket, 'activeWindow')) {
                            _closeWindow(objOfActiveSection.windowBasket, 'activeWindow');
                            _closeWindow(blackout, 'animatedOpening');
                            body.style.overflowY = 'visible';
                        }
                        break;

                    default:
                        break;
                }
            });
        }
    }

    function _setHeightForElem(elem, value) {
        if (value > 0) {
            elem.style.maxHeight = `999px`;
            elem.style.height = `100%`;
        } else {
            elem.style.maxHeight = `0px`;
            elem.style.height = `0%`;
        }
    }

    function disableFilter(_elem) {
        let height = _elem.querySelector('#filterForm').offsetHeight;
        _setHeightForElem(_elem.querySelector('#filterForm'), 0);
        return height;
    }

    function _getElemFromParentElem(tagName) {
        let arr = [];

        for (const key in objOfActiveSection) {
            if (!objOfActiveSection.hasOwnProperty(key)) {
                return
            }

            Array(...objOfActiveSection[key].getElementsByTagName(tagName)).filter(e => e.id != '' ? arr.push(e) : null);
        }

        return arr;
    }

    function _hasElementClass(elem, className) {
        return elem.classList.contains(className);
    }

    function _closeWindow(elem, className) {
        return elem.classList.remove(className);
    }

    function _openWindow(elem, className) {
        return elem.classList.add(className);
    }

    __init__();
}

export default header;