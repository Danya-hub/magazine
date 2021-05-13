import {
    objForBuyingComics
} from "./../../../data/objForBuyingComics.js";

const style = {
    keyframeForAnimation: function (value) {
        return `
            @keyframes movement {
                0% {
                    right: 0%;
                }
                100% {
                    right: ${value}%; 
                }
            }
        `
    },
    outsideWrapperForLastChild: function (value) {
        return `
            position: absolute;
            right: ${value}%;
        `
    },
};

class Button {
    _element;

    constructor(element) {
        this._element = element; 
    }

    disable() { 
        this._element.setAttribute('disabled', 'true'); //* arrow set attribute "disabled"
        this._element.classList.add('disabledArrow') //* arrow set attribute "opacity: 0.4"
    }

    enable() { 
        this._element.removeAttribute('disabled'); //* arrow remove attribute "disabled"
        this._element.classList.remove('disabledArrow')
    }

    isDisabled() { 
        return this._element.hasAttribute('disabled'); //* return property
    }

    get element() { 
        return this._element; //* return property
    }

    get data() {
        return this._element.dataset; //* return property
    }
}

class Slider {
    _rootElement;
    _buttonNext;
    _buttonPrev;
    _slides;
    _sliderWrapper;
    _lastInd;
    _firstInd;
    _slideWidth;
    _transitionDuration;

    constructor(rootElement, slides) {
        this._rootElement = rootElement;
        this._slides = slides;
        this.__init__();
    }

    __init__() {
        this._sliderWrapper = this._rootElement.querySelector('.magazine-galleryComics-wrapper');
        this._sliderWrapperForActiveSlide = document.createElement('div');
        this._sliderWrapperForActiveSlide.id = 'wrapperForActiveSlides';

        this._buttonNext = new Button(this._rootElement.querySelector('.magazine-galleryComics-button.next'));
        this._buttonPrev = new Button(this._rootElement.querySelector('.magazine-galleryComics-button.prev'));

        this._buttonPrev.element.onclick = this.slidePrev.bind(this);
        this._buttonNext.element.onclick = this.slideNext.bind(this);

        this._sliderWrapper.append(this._sliderWrapperForActiveSlide);
        this._sliderWrapper.append(...this._slides);

        this._slideWidth = parseInt(window.getComputedStyle(this._slides[0], null).maxWidth);

        this._visibilityComics();

        this.durationOfAnimation = 0.4;
        this._firstInd = 0,
            this._lastInd = this._slides.filter(el => el.classList.contains('activeCard')).length - 1;

        this._isArrowBeDisabled();
    }

    _equalityButtons(movement, direction, ...value) {
        return movement == direction ? value[0] : value[1];
    }

    _getDurationFromTransition(position) {
        return parseFloat(window.getComputedStyle(this._slides[position], null).transitionDuration) * 1000;
    }

    _appendSlides(slide, movement) {
        return movement == 'next' ? this._sliderWrapperForActiveSlide.append(slide) : this._sliderWrapperForActiveSlide.prepend(slide);
    }

    _removedSlides(slide, movement) {
        this._sliderWrapperForActiveSlide.removeChild(slide);
        movement == 'next' ? this._sliderWrapperForActiveSlide.before(slide) : this._sliderWrapperForActiveSlide.after(slide);
    }

    _visibilityComics() {
        this.slidesOnPage = parseInt(parseInt(this._sliderWrapper.offsetWidth) / this._slideWidth);
        this.activeSlides = this._slides.slice(0, this.slidesOnPage);
        this.hiddenSlides = this._slides.slice(this.slidesOnPage);

        this._widthOfWrapper = this._slideWidth * this.slidesOnPage;

        this._sliderWrapper.style.width = `${this._widthOfWrapper}px`;

        this.activeSlides.forEach(slide => {
            slide.classList.add('activeCard');
            this._sliderWrapperForActiveSlide.append(slide);
        });

        this.hiddenSlides.forEach(slide => {
            slide.classList.add('noActiveCard');
        });
    }

    _hasDOMElemInParentElem(tagNameOfChildElem, parentElem, idOfChildElem) { //!
        let elem = null;
        let bool = true;

        for (const _elem of parentElem.getElementsByTagName(tagNameOfChildElem)) {
            if (_elem.id == idOfChildElem) {
                elem = _elem;
                bool = false;
            }
        }

        return [elem, bool];
    }

    _createAnimationForSlides(keyframe, movement) {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.id = this._equalityButtons(movement, 'next', 'moveRight', 'moveLeft');

        if (this._hasDOMElemInParentElem('style', document.head, 'moveRight')[1] && this._hasDOMElemInParentElem('style', document.head, 'moveLeft')[1]) {
            document.head.appendChild(style);
            style.sheet.insertRule(keyframe, style.sheet.cssRules.length);
        }

        if (movement == 'prev' && !this._hasDOMElemInParentElem('style', document.head, 'moveRight')[1]) {
            document.head.replaceChild(style, this._hasDOMElemInParentElem('style', document.head, 'moveRight')[0]);
            style.sheet.insertRule(keyframe, style.sheet.cssRules.length);
        } else if (movement == 'next' && !this._hasDOMElemInParentElem('style', document.head, 'moveLeft')[1]) {
            document.head.replaceChild(style, this._hasDOMElemInParentElem('style', document.head, 'moveLeft')[0]);
            style.sheet.insertRule(keyframe, style.sheet.cssRules.length);
        }
    }

    _moveSlider(firPos, lastPos, movement) {
        this._appendSlides(this._slides[this._equalityButtons(movement, 'next', lastPos, firPos)], movement);
        this._slides[this._equalityButtons(movement, 'next', lastPos, firPos)].classList.replace('noActiveCard', 'activeCard');
        this._slides[this._equalityButtons(movement, 'next', lastPos, firPos)].style.cssText = style.outsideWrapperForLastChild(
            this._equalityButtons(movement, 'next', `-${Math.round((this._slideWidth * 100) / this._widthOfWrapper)}`, 100),
        );

        this._sliderWrapperForActiveSlide.style.animation = `movement ${this.durationOfAnimation}s cubic-bezier(0.215, 0.610, 0.355, 1.000)`;

        this._createAnimationForSlides(
            style.keyframeForAnimation(
                this._equalityButtons(movement, 'next', '+', '-') +
                Math.round((this._slideWidth * 100) / this._widthOfWrapper)
            ),
            movement,
        );

        setTimeout(() => {
            this._sliderWrapperForActiveSlide.removeAttribute('style');
            this._slides[this._equalityButtons(movement, 'next', lastPos, firPos)].removeAttribute('style');
            this._removeOldElem(this._equalityButtons(movement, 'next', firPos, lastPos), movement);
        }, this.durationOfAnimation * 1000);
    }

    _removeOldElem(pos, movement) {
        if (this._slides[this._lastInd].dataset.index >= this._lastInd) {
            this._slides[pos].classList.replace('activeCard', 'noActiveCard');
            this._removedSlides(this._slides[pos], movement);
        }
    }

    _disabledArrow(button) {
        this.lengthSlide = this._sliderWrapper.getElementsByClassName('magazine-galleryComics-imgComics').length - 1;

        if ((button.data.arrow == 'next') && this._isConditionsEqual(this._lastInd, this.lengthSlide)) {
            return button.disable();
        } else if ((button.data.arrow == 'prev') && this._returnOtherArrow(button, false) && this._isСonditionComparison()) {
            return this._returnOtherArrow(button, true).enable();
        }

        if ((button.data.arrow == 'prev') && this._isConditionsEqual(this._firstInd, 0)) {
            return button.disable();
        } else if ((button.data.arrow == 'next') && this._returnOtherArrow(button, false) && this._isСonditionComparison()) {
            return this._returnOtherArrow(button, true).enable();
        }
    }

    _isСonditionComparison() {
        return (this._slides[this._lastInd].dataset.index < length) || (this._slides[this._firstInd].dataset.index > 0);
    }

    _isConditionsEqual(conditionNumber, index) {
        return this._slides[index].dataset.index == conditionNumber;
    }

    _isArrowBeDisabled() {
        if (this._isConditionsEqual(this._firstInd, 0)) {
            this._buttonPrev.disable();
        }
    }

    _returnOtherArrow(button, returnVariable) {
        if ((button.data.arrow == 'next') && (returnVariable == false)) {
            return this._buttonPrev.isDisabled();
        } else if ((button.data.arrow == 'next') && (returnVariable == true)) {
            return this._buttonPrev;
        }

        if ((button.data.arrow == 'prev') && (returnVariable == false)) {
            return this._buttonNext.isDisabled();
        } else if ((button.data.arrow == 'prev') && (returnVariable == true)) {
            return this._buttonNext;
        }
    }

    slideNext() {
        this._lastInd++;

        this._moveSlider(this._firstInd++, this._lastInd, 'next');
        this._disabledArrow(this._buttonNext);
    }

    slidePrev() {
        this._firstInd--;

        this._moveSlider(this._firstInd, this._lastInd--, 'prev');
        this._disabledArrow(this._buttonPrev);
    }
}

function getSlideFromJson(jsonData) {
    const slides = [];

    jsonData.forEach((row, i) => {
        let slide = document.createElement('div');

        slide.classList.add('magazine-galleryComics-imgComics');
        slide.dataset.index = row.index;

        slide.innerHTML = `
            <div>
                <span class="magazine-galleryComics-index">index: <span class="magazine-galleryComics-indexSpan">${row.index}</span></span>
                <img src="#" alt="comics">
                <div class="magazine-galleryComics-bottomPanel">
                    <h3 class="magazine-galleryComics-bottomPanel-title">${row.hero + i}</h3>
                    <div>
                        <span class="magazine-galleryComics-bottomPanel-price">Цена: <span class="magazine-galleryComics-bottomPanel-priceSpan">${row.price}$</span></span>
                        <button type="button" class="magazine-galleryComics-bottomPanel-button">
                            <i class="fas fa-shopping-basket"></i>
                        </button>
                    </div>
                </div>
            </div>
          `;

        slides.push(slide);
    });

    return slides;
}

const sliderForBuying = () => {
    const sliders = [];

    for (let key in objForBuyingComics) {
        if (!objForBuyingComics.hasOwnProperty(key)) {
            continue;
        }

        const element = document.querySelector('[data-hero="' + key + '"]');

        if (element == null) {
            return
        }
        
        const slides = getSlideFromJson(objForBuyingComics[key]);
        sliders.push(new Slider(element, slides));
    }
}

export default sliderForBuying;