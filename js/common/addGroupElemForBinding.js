import {
    objOfGroupForBinding
} from "../../data/objBindingElem.js";

class Add {
    constructor() {
        this.__init__();
    }

    __init__() {
        this.page = document.querySelector('.pageWrapper');
        this.window = objOfGroupForBinding[this.page.classList[1]];
    }

    _addContentInWindow(_elem, vers) {
        return _elem.innerHTML = this.window[vers];
    }
}

function addDOM() {
    const sidePanel = new Add();
    sidePanel._addContentInWindow(document.querySelector('aside'), 'compVersion');
    sidePanel._addContentInWindow(document.querySelector('#navigation'), 'mobVersion');
}

export default addDOM;