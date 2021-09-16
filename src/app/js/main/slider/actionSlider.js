class ActionSlider {
    constructor(parentElem, cardsCount = 5) {
        this.parentElem = parentElem;
        this._css_class_active = 'active';
        this._css_class_not_active = 'noActive';
        this.cardsCount = cardsCount;
        this.childElem = [];
        this.__init__();
    }

    _createBlankForChildrenElem() {
        for (let i = 0; i < this.cardsCount; i++) {
            let elem = document.createElement('div');
            elem.classList.add('galleryComics-imgComics');
            elem.dataset.index = i;

            elem.innerHTML = `
                <a href="#">
                    <div></div>
                </a>
            `;

            this.childElem.push(elem);
            this.parentElem.appendChild(elem);
        }
    }

    _addClassEachChild() {
        this.childElem.map(e => !(e.classList.contains(this._css_class_active)) && (e.dataset.index == 0) ? e.classList.add(this._css_class_active) : null);
        this.childElem.map(e => !(e.classList.contains(this._css_class_not_active)) && (e.dataset.index > 0) ? e.classList.add(this._css_class_not_active) : null);
    }

    _isFindingClassInElement(elem, className) {
        return elem.classList.contains(className);
    }

    _isСonditionComparison(elem, num) {
        return elem.dataset.index > num;
    }

    _changeElementsClass(childElem) {
        if (!this._isFindingClassInElement(childElem, 'noActive')) {
            return childElem.classList.add('active');
        } else {
            return childElem.classList.replace('noActive', 'active');
        }
    }

    _removeLastIndex(childElem, ind) {
        if (this._isСonditionComparison(childElem[ind], 0)) {
            return childElem[ind - 1].classList.replace('active', 'noActive');
        }
    }

    _moveSlider() {
        let slide = this.childElem;
        let ind = 0;

        setInterval(() => {
            slide.forEach(elem => {
                elem.classList.replace('active', 'noActive');
            });

            slide[ind].classList.replace('noActive', 'active')

            ind++;

            if (ind >= slide.length) {
                ind = 0;
            }
        }, 3000);
    }

    __init__() {
        this._createBlankForChildrenElem();
        this._addClassEachChild();

        this.firstInd = 0;
        this.lastInd = this.childElem.length - 1;
        
        this._moveSlider();
    }
}

function actionSlider() {
    new ActionSlider(document.querySelector('.galleryComics'));
}

export default actionSlider;