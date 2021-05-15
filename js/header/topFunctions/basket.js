import {
    objectSections
} from "../../../data/objRepeatSections.js";

const basket = () => {
    let objDataAboutProducts = [];

    function __init__() {
        let parentElem = document.querySelector('.windowBasket');

        basket(
            Array(...document.querySelectorAll('.magazine-galleryComics-imgComics')),
            Array(...document.querySelectorAll('.countQuantityProducts')),
            parentElem,
        );
    }

    function blankForEmptyBasket() {
        return `
            <div id="empty">
                <div id="imageQuest">
                    <img src="https://i.postimg.cc/VLSt8v0L/question.png" alt="question">
                </div>
                <span>Корзина пуста! Выберете какой-то продукт.</span>
            </div>
        `;
    }

    function blankParentsElemForProducts() {
        return `
            <ul class="windowBasket-listProducts"></ul>
            <div id="subtotal" class="windowBasket-subtotal">
               <span>Сумма:
                    <b class="windowBasket-sumPrice">0$</b>
                </span>
            </div>
            <button type="button" id="buyProduct">Заказать</button>
        `;
    }

    function blankChildElem(name, price, index) {
        return `
            <li class="windowBasket-listProducts-items" index="${index}" theNameProduct="${name}">
                <div>
                    <h3 class="windowBasket-listProducts-title">Название: <span>${name}</span></h3>
                    <div class="windowBasket-listProducts-quantityProsucts" id="quantityProducts">
                        <button type="button" id="prev" class="buttonCountProduct">
                            <i class="fas fa-minus"></i>
                        </button>
                        <form action="#" method="GET">
                            <input type="text" class="windowBasket-listProducts-inputQuantity" value="1">
                        </form>
                        <button type="button" id="next" class="buttonCountProduct">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <span class="windowBasket-listProducts-price">Цена: ${price}$</span>
                </div>
                <button type="button" id="deleteItems">
                    <img src="https://i.postimg.cc/s2fSbcpb/gray-Close.png" alt="buttonDelete">
                </button>
            </li>
        `;
    }

    function compareOfNumbers(firNum, secNum, operation) {
        return eval(firNum + `${operation == '=' ? '==' : operation}` + secNum);
    }

    function _hasClassInElem(elem, className) {
        if (elem.classList.contains(className)) {
            return true;
        } else {
            return false;
        }
    }

    function _actionsWithQuantityProducts(DOMElem, operation) {
        for (const elem of DOMElem) {
            elem.innerHTML = eval(Number(elem.innerHTML) + `${operation}` + 1);
        }
    }

    function _hasKeyOrValueInObj(arr, name) {
        let arrOfBoolen = [];

        for (const obj of arr) {
            let values = Object.values(obj);

            arrOfBoolen.push(values.includes(name));
        }

        let boolen = false;
        let index = 0;

        arrOfBoolen.find((e, i) => {
            if (e == true) {
                index = i;
                boolen = true;
            }
        })

        return [boolen, index];
    }

    function _getNameOfElem(elem) {
        return elem.className == '' ? elem.id : elem.className;
    }

    function _deleteItems(items, countQuantity, wrapperOfChild, subtotal) {
        let arrOfDOMElem = Array(...items);

        arrOfDOMElem.forEach(elem => elem.addEventListener('click', (e) => {
            let theNameProduct = e.currentTarget.querySelector('h3>span').textContent;

            if (_getNameOfElem(e.target) == 'deleteItems') {
                if (_hasKeyOrValueInObj(objDataAboutProducts, theNameProduct)[0]) {
                    let objOfTheProduct = objDataAboutProducts.splice(_hasKeyOrValueInObj(objDataAboutProducts, theNameProduct)[1], 1);

                    for (const elem of objOfTheProduct) {
                        subtotal.textContent = `${parseInt(subtotal.textContent) - elem.sumOfProduct}$`;
                    }
                }

                _actionsWithQuantityProducts(countQuantity, '-');
                e.currentTarget.parentNode.removeChild(e.currentTarget);

                countQuantity.forEach(e => {
                    if (compareOfNumbers(e.textContent, 0, '=')) {
                        wrapperOfChild.innerHTML = blankForEmptyBasket();
                        wrapperOfChild.classList.add('empty');
                    }
                });
            }
        }))
    }

    function _setQuantityOfProductsThroughInputedValue(childElem, parentElem, value, subtotal) {
        let result = 0;

        for (const obj of objDataAboutProducts) {
            if (parentElem.getAttribute('theNameProduct') == obj.name) {
                obj.count = value;
            }
        }

        childElem.setAttribute('value', value);

        for (let i = 0; i < objDataAboutProducts.length; i++) {
            objDataAboutProducts[i].sumOfProduct = objDataAboutProducts[i].price *
                objDataAboutProducts[i].count;

            result += objDataAboutProducts[i].sumOfProduct;
        }

        return subtotal.textContent = `${result}$`;
    }

    function _setQuantityOfProductsThroughClickButtons(childElem, parentElem, elementForSetValue, subtotal) {
        let result = 0;

        for (const obj of objDataAboutProducts) {
            if (parentElem.getAttribute('theNameProduct') == obj.name) {
                if (childElem.id == 'prev') {
                    obj.count -= 1;
                    elementForSetValue.value = Number(elementForSetValue.value) - 1;
                }

                if (childElem.id == 'next') {
                    obj.count += 1;
                    elementForSetValue.value = Number(elementForSetValue.value) + 1;
                }

                elementForSetValue.setAttribute('value', obj.count);
            }
        }

        for (let i = 0; i < objDataAboutProducts.length; i++) {
            objDataAboutProducts[i].sumOfProduct = objDataAboutProducts[i].price *
                objDataAboutProducts[i].count;

            result += objDataAboutProducts[i].sumOfProduct;
        }

        subtotal.textContent = `${result}$`;
    }

    function _getSumOfPriceWithCount(parentElem, subtotal) {
        parentElem.forEach(elem => elem.addEventListener('click', (e) => {
            if (_getNameOfElem(e.target) == 'buttonCountProduct') {
                _setQuantityOfProductsThroughClickButtons(e.target, e.currentTarget, e.currentTarget.querySelector('input'), subtotal);
            }
        }));

        parentElem.forEach(elem => elem.addEventListener('input', (e) => {
            if (_getNameOfElem(e.target) == 'windowBasket-listProducts-inputQuantity') {
                _setQuantityOfProductsThroughInputedValue(e.target, e.currentTarget, Number(e.target.value), subtotal);
            }
        }));
    }

    function basket(DOMElemForTakeInfo, countQuantityProducts, parentElem) {
        let hero, price, index;
        let wrapper = null;

        countQuantityProducts.forEach(e => {
            if (compareOfNumbers(e.textContent, 0, '=')) {
                parentElem.innerHTML = objectSections.windowBasket;
                wrapper = parentElem.querySelector('.windowBasket-wrapper');
                wrapper.classList.add('empty');
                wrapper.innerHTML = blankForEmptyBasket();
            }
        });

        DOMElemForTakeInfo.forEach(elem => {
            elem.addEventListener('click', (e) => {
                let titleProduct = e.currentTarget.querySelector('.magazine-galleryComics-bottomPanel-title').textContent;
                let priceProduct = e.currentTarget.querySelector('.magazine-galleryComics-bottomPanel-priceSpan').textContent;

                hero = titleProduct;
                price = parseInt(priceProduct);
                index = e.currentTarget.dataset.index;

                if (e.target.type == 'button') {
                    if (_hasClassInElem(wrapper, 'empty')) {
                        wrapper.innerHTML = blankParentsElemForProducts();
                        wrapper.classList.remove('empty');
                    }

                    if (!_hasKeyOrValueInObj(objDataAboutProducts, hero)[0]) {
                        let listProducts = wrapper.querySelector('ul');
                        let subtotal = wrapper.querySelector('b');

                        objDataAboutProducts.push({
                            name: hero,
                            price: price,
                            count: 1,
                            sumOfProduct: price,
                        })

                        listProducts.innerHTML += blankChildElem(hero, price, index);
                        _actionsWithQuantityProducts(countQuantityProducts, '+');

                        subtotal.textContent = `${(parseInt(subtotal.textContent) + price)}$`;

                        _getSumOfPriceWithCount(
                            Array(...listProducts.getElementsByTagName('li')),
                            subtotal,
                        );

                        _deleteItems(
                            listProducts.getElementsByTagName('li'),
                            countQuantityProducts,
                            wrapper,
                            subtotal,
                        );
                    }
                }
            });
        });
    }

    __init__();
}

export default basket;