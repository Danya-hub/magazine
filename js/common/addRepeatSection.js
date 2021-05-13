import {
    objectSections
} from "../../data/repeatSections.js";
import {
    objOfInfoAboutSections
} from "./../../js/common/activeRepeatingSections.js";

const addRepeatSection = () => {
    
    function __init__() {
        _appendElem(objOfInfoAboutSections);
    }

    function _appendElem(obj) {
        for (const key in obj) {
            if (!obj.hasOwnProperty(key)) {
                return
            }

            obj[key].innerHTML = objectSections[key];
        }
    }

    __init__();
}

export default addRepeatSection;