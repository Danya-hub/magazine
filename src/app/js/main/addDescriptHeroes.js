import {
    infoAboutEachHeroes
} from "./../../data/objDescriptionHeroes.js";

const addDescriptHeroes = () => {
    const evidence = {
        wrapperOfDOMElements: [],
        objOfElemByTags: {},
        _setParentsElem: function (wrapperOfDOMElements) {
            for (const elem of wrapperOfDOMElements) {
                this.wrapperOfDOMElements.push(elem);
            }
        },
        _getArgumentsOfTags: function () {
            const elem = this.wrapperOfDOMElements;
            let findedTag = [];

            for (let i = 0; i < elem.length; i++) {
                for (const arg of arguments) {
                    findedTag.push(this._getElementsByTagName(elem[i], arg));
                }
            }

            this._createKeysOfTagsInObj(findedTag);
        },
        _createKeysOfTagsInObj: function (tags) {
            let DOMElemetns = [];

            for (let i = 0; i < tags.length; i++) {
                for (const tag of tags[i]) {
                    DOMElemetns.push(tag);
                    this.objOfElemByTags[`${tag.tagName.toLowerCase()}`] = [];
                }
            }

            this._addedTagsInKeys(DOMElemetns, this.objOfElemByTags, 'tag')
        },
        _addedTagsInKeys: function (tags, obj, returnedData) {
            for (const key in obj) {
                if (!Object.hasOwnProperty.call(obj, key)) {
                    continue;
                }

                if (returnedData == 'tag') {
                    tags.filter(e => e.tagName.toLowerCase() == key ? obj[key].push(e) : null);
                }

                if (returnedData == 'height') {
                    tags.filter(e => e.tagName.toLowerCase() == key ? obj[key].push(e.offsetHeight) : null);
                }
            }
        },
        _getElementsByTagName: function (elem, tag) {
            return elem.getElementsByTagName(tag);
        },
        _getDatasetOfChildElem: function () {
            for (const elem of this.wrapperOfDOMElements) {
                this.dataset.push(elem.dataset.hero);
            }
        },
        _getElemHeight: function () {
            for (const key in this.objOfElemByTags) {
                for (const elem of this.objOfElemByTags[key]) {
                    this.heightElem[`${elem.tagName.toLowerCase()}`] = [];
                    this._addedTagsInKeys(this.objOfElemByTags[key], this.heightElem, 'height');
                }
            }
        },
        _getTextOfDescriptionEachHeroes: function () {
            for (const key in infoAboutEachHeroes) {
                if (!Object.hasOwnProperty.call(infoAboutEachHeroes, key)) {
                    continue;
                }

                this.descriptionEachHeroes.push(infoAboutEachHeroes[key].split(' ').filter(e => e != '' ? e : null).join(' '));
            }
        },
        _getQuantityWords: function () {
            for (const words of this.descriptionEachHeroes) {
                this.quantityWords.push(words.split(' ').length);
            }
        },
        _addedDescriptionInDOMElements: function () {
            for (let i = 0; i < this.wrapperOfDOMElements.length; i++) {
                for (const key in this.objOfElemByTags) {
                    if ((this.dataset[i] == this.wrapperOfDOMElements[i].dataset.hero) && (key == 'p')) {
                        this.objOfElemByTags[key][i].textContent = this.descriptionEachHeroes[i];
                    }
                }
            }
        },
        descriptionEachHeroes: [],
        dataset: [],
        heightElem: {},
        quantityWords: [],
        maxElemHeight: 280
    }

    function truncateByHeight(element, heightButtons, neededHeight) {
        let textContent = typeof element.textContent === 'undefined' ? 'innerText' : 'textContent';
        let parts = element[textContent].split(' ');

        while (parts.pop() && element.offsetHeight + heightButtons > neededHeight) {
            let lastSortedWordWithoutUnnecessarySymbols = parts[parts.length - 1].split('').map(e => (e == ',') || (e == '.') ? null : e).join('');
            element[textContent] = parts.slice(0, parts.length - 1).join(' ') + ` ${lastSortedWordWithoutUnnecessarySymbols}...`;
        }
    }

    function __init__() {
        evidence._setParentsElem(document.querySelectorAll('.heroInfo>div'));
        evidence._getArgumentsOfTags('p', 'a');

        evidence._getTextOfDescriptionEachHeroes();

        evidence._getDatasetOfChildElem();
        evidence._getQuantityWords();

        evidence._addedDescriptionInDOMElements();
        evidence._getElemHeight();

        let heightButton, heightText;
        let arrTagsOfButtons, arrTagsOfTexts;

        for (const tag in evidence.objOfElemByTags) {
            for (const height in evidence.heightElem) {
                if ((tag == 'a') && (height == 'a')) {
                    heightButton = evidence.heightElem[height];
                    arrTagsOfButtons = evidence.objOfElemByTags[tag];
                } else if ((tag == 'p') && (height == 'p')) {
                    heightText = evidence.heightElem[height];
                    arrTagsOfTexts = evidence.objOfElemByTags[tag];
                }
            }
        }

        for (let i = 0; i < evidence.wrapperOfDOMElements.length; i++) {
            const marginTop = parseInt(window.getComputedStyle(arrTagsOfButtons[i], null).marginTop);
            truncateByHeight(arrTagsOfTexts[i], (heightButton[i] + marginTop), evidence.maxElemHeight);
        }
    }

    __init__();
}

export default addDescriptHeroes;