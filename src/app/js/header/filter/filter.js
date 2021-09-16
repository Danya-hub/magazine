import selectPrice from "./selectPrice.js";
import appearingPages from "./appearingPages.js";
import {
    objToBuyComics
} from "./../../../data/objToBuyComics.js";

const filter = () => {
    function _into() {
        appearingPages(objToBuyComics);
        selectPrice(objToBuyComics);

        _setIndexForEachChildElem(document.querySelectorAll('.filter-listItems'));
        _setListenerForEachChildElemToClick(
            document.querySelector('.filter'),
            _getHeightEachChildElem(document.querySelector('.filter'), '.filter-wrapper')
        );
    }

    function _setheightForChildElem(elem, height) {
        return elem.style.height = height;
    }

    function _setIndexForEachChildElem(elem) {
        return elem.forEach((e, i) => e.setAttribute('index', i));
    }

    function _getHeightEachChildElem(parentELem, neededElemThroughClass) {
        let arrOfheight = [];
        let childElem = parentELem.querySelectorAll(neededElemThroughClass);

        childElem.forEach(e => {
            arrOfheight.push(e.offsetHeight);
            _setheightForChildElem(e, 0)
        });

        return arrOfheight;
    }

    function _removingDOMElemFromArr(array) {
        let removingElem = array.shift();
        let wrapperForDisappend = _getElemFromParentElem(removingElem.parentNode, 'div');
        wrapperForDisappend.style.height = 0;
        removingElem.removeAttribute('active');

        return array;
    }

    function _addingDOMElemFromArr(elem, array) {
        return array.push(elem);
    }

    function _getElemFromParentElem(parent, tagNameOfChild) {
        return parent.getElementsByTagName(tagNameOfChild)[0];
    }

    function _noActiveForElem(elem, event, tagName) {
        return elem.tagName.toLowerCase() == tagName ? event.preventDefault() : null;
    }

    function _setListenerForEachChildElemToClick(parentElem, heightsOfChildElem) {
        let arrOfActiveButtons = [];

        parentElem.addEventListener('click', (e) => {
            const parentElemForChild = e.target.parentNode;

            if (parentElemForChild.tagName.toLowerCase() == 'li') {
                const button = _getElemFromParentElem(parentElemForChild, 'button');
                const wrapperOfChildElem = _getElemFromParentElem(parentElemForChild, 'div');

                if (wrapperOfChildElem == undefined) {
                    return
                }

                _noActiveForElem(e.target, e, 'button');

                if (button.getAttribute('active')) {
                    button.removeAttribute('active');
                    wrapperOfChildElem.style.height = 0;
                    _removingDOMElemFromArr(arrOfActiveButtons);
                } else {
                    button.setAttribute('active', true);
                    wrapperOfChildElem.style.height = `${heightsOfChildElem[parentElemForChild.getAttribute('index')]}px`;
                    _addingDOMElemFromArr(button, arrOfActiveButtons);
                }

                if (arrOfActiveButtons.length > 1) {
                    _removingDOMElemFromArr(arrOfActiveButtons);
                }
            }
        });
    }

    _into();
}

export default filter;