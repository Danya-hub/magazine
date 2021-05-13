import {
    objOfGroupForBinding
} from "../../data/objBindingElem.js";

class Add {
    page;
    button;
    window;

    constructor(_elemForAddButton) {
        this.elemForAddButton = _elemForAddButton;
        this.__init__();
    }

    __init__() {
        this.page = document.querySelector('.pageContent');
        this.window = objOfGroupForBinding[this.page.classList[1]].window;
        this._createDOMElem(objOfGroupForBinding[this.page.classList[1]].button, 'button');
        this._addButton('prepend');
        console.log(this.window);
    }

    _addContentInWindow(_elem, vers) {
        return _elem.innerHTML = this.window[vers];
    }

    _addButton(direction) {
        return direction == 'append' ? this.elemForAddButton.append(this.button) : this.elemForAddButton.prepend(this.button);
    }

    _createDOMElem(content, elem) {
        this[elem] = document.createElement(elem);
        this[elem].innerHTML = content;
    }
}

function addDOM() {
    const sidePanel = new Add(document.querySelector('.header'));
        sidePanel._addContentInWindow(document.querySelector('aside'), 'compVersion');
        sidePanel._addContentInWindow(document.querySelector('.navFunctionsList'), 'mobVersion');
}

export default addDOM;