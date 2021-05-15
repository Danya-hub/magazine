import {
    objOfGroupForBinding
} from "../../data/objBindingElem.js";

class Add {
    constructor(_elemForAddButton) {
        this.elemForAddButton = _elemForAddButton;
        this.__init__();
    }

    __init__() {
        this.page = document.querySelector('.pageContent');
        this.window = objOfGroupForBinding[this.page.classList[1]].window;
        let buttons = objOfGroupForBinding[this.page.classList[1]].button;
        this._createDOMElem(Object.values(buttons), 'button');
    }

    _getButton(nameButton) {
        return this.button.find(iteration => nameButton.className == nameButton || iteration.id == nameButton ? iteration : null);
    }

    _addContentInWindow(_elem, vers) {
        return _elem.innerHTML = this.window[vers];
    }

    _addElem(_elem, direction) {
        return direction == 'append' ? this.elemForAddButton.append(_elem) : this.elemForAddButton.prepend(_elem);
    }

    _createDOMElem(content, tagName) {
        this[tagName] = [];
        
        content.forEach(iteration => {
            let _elem = document.createElement(tagName);
            _elem.innerHTML = iteration;
            
            Array(..._elem.getElementsByTagName(tagName)[0].attributes).forEach(e => {
                _elem.setAttribute(e.name, e.value);
                _elem.innerHTML = e.ownerElement.innerHTML;
            });

            this[tagName].push(_elem);
        });
    }
}

function addDOM() {
    const sidePanel = new Add(document.querySelector('.header'));
    sidePanel._addContentInWindow(document.querySelector('aside'), 'compVersion');
    sidePanel._addContentInWindow(document.querySelector('.navFunctionsList'), 'mobVersion');
    sidePanel._addElem(sidePanel._getButton('openBtn'), 'prepend');
}

export default addDOM;