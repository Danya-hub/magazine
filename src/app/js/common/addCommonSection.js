import {
    modelsOfSections
} from "../../data/objModelsForSections.js";
import {
    objCommonSections
} from "../../data/objCommonSections.js";

const addRepeatSection = () => {
    function __init__() {
        _appendElem(objCommonSections);
    }

    function _appendElem(obj) {
        for (const key in obj) {
            if (!obj.hasOwnProperty(key)) {
                return
            }

            obj[key].innerHTML = modelsOfSections[key];
        }
    }

    __init__();
}

export default addRepeatSection;