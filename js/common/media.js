const media = (objOfActiveSection) => {

    function _into() {
        _changeTagNameForElem(_getElemFromArrOfArguments('filter'), 'filterButton');
    }

    function _getElemFromArrOfArguments(name) {
        let _elem = null;
        Object.values(objOfActiveSection).find(e => e.className == name || e.id == name ? _elem = e : null);

        return _elem;
    }

    function _getQualityOfMedia(width) {
        return window.matchMedia(width).matches;
    }

    function _renameTagForDOMElem(classNameOfOldChildElem, oldChildELem, neededTag, neededPartClass = null) {
        const arrWordsOfClass = classNameOfOldChildElem.split('');
        let changeClassNameForChildElem = null;
        const newChildElem = document.createElement(neededTag);
        const parentElem = oldChildELem.parentNode;
        
        arrWordsOfClass.find((e, i) => e == '-' ? changeClassNameForChildElem = arrWordsOfClass.slice(0, i + 1).join('') + neededPartClass : null);
        newChildElem.classList.add(changeClassNameForChildElem);
        newChildElem.innerHTML = oldChildELem.innerHTML;

        return parentElem.replaceChild(newChildElem, oldChildELem);
    }

    function _changeTagNameForElem(parentElem, nameOfElem) {
        if (_getQualityOfMedia('(min-width: 640px)')) {
            let navInFilter = parentElem.querySelector('form');
            _renameTagForDOMElem(
                nameOfElem,
                parentElem.querySelector(`#${nameOfElem}`),
                'span',
                'title',
            );
            navInFilter.removeAttribute('style');
        }
    }

    _into();
}

export default media;