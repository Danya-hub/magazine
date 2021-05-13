'use strict';

import {
    objOfInfoAboutSections
} from "./js/common/activeRepeatingSections.js";

//* ------------ header ------------
import basket from "./js/header/topFunctions/basket.js";
import navigation from "./js/header/topFunctions/navigation.js";
import filter from "./js/header/filter/filter.js";
import header from "./js/header/header.js";

//* ------------ main ------------
import actionSlider from "./js/main/slider/actionSlider.js";
import sliderForBuying from "./js/main/slider/sliderBuying.js";
import addDescriptHeroes from "./js/main/addDescriptHeroes.js";

//* ------------ common ------------ 
import addRepeatSection from "./js/common/addRepeatSection.js";
import addGroupElemForBinding from "./js/common/addGroupElemForBinding.js";
import media from "./js/common/media.js";

function _hasElemInHTML(name) {
    return !!(objOfInfoAboutSections.hasOwnProperty(name) || document.querySelector(name));
}

//* 1)
addRepeatSection();
addGroupElemForBinding();

//* 2)
_hasElemInHTML('.galleryComics') ? actionSlider() : null;
_hasElemInHTML('.heroInfo') ? addDescriptHeroes() : null;
_hasElemInHTML('windowBasket') ? sliderForBuying() : null;
_hasElemInHTML('windowBasket') ? basket() : null;

//* 3)
_hasElemInHTML('filter') ? filter() : null;
_hasElemInHTML('header') ? header(objOfInfoAboutSections) : null;
_hasElemInHTML('navFunctionsList') ? navigation() : null; //! document.querySelector('.pageContent').classList.add('noActiveNav')

//* 4)
_hasElemInHTML('filter') ? media(objOfInfoAboutSections) : null;