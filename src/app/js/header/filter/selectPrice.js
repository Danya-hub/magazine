const selectPrice = (data) => {
    class Button {
        constructor(element) {
            this.element = element;
        }

        _setPosition(value) {
            return this.element.style.left = `${value}%`;
        }

        _setAttribute(nameOfAttribute, value) {
            return this.element.setAttribute(nameOfAttribute, value);
        }

        _getAttribute(nameOfAttribute) {
            return this.element.getAttribute(nameOfAttribute);
        }

        _getBeforeOfButton() {
            return this.element.getElementsByTagName('span')[0];
        }
    }

    
    class Input {
        constructor(element) {
            this.element = element;
        }

        _isEquilingBetweenClasses(className) {
            return this.element.id == className;
        }
    }

    let dataForMainInput = {
        valueOfButtons: {
            firButton: 0,
            secButton: 0,
        },
        poisitonOfButtons: {
            firButton: 0,
            secButton: 0,
        },
        max: 0,
        min: 0,
    }

    function __init__() {
        const leftButton = new Button(document.getElementById('left'));
        const rightButton = new Button(document.getElementById('right'));

        const leftInput = new Input(document.getElementById('fromPrice'));
        const rightInput = new Input(document.getElementById('untilPrice'));

        _findoutMaxValueFromObj(data);

        scrollingForSelectPrice(
            document.getElementById('range'),
            leftButton, rightButton,
        );

        inputtingForSelectPrice(
            [leftButton, rightButton],
            [leftInput, rightInput],
            document.getElementById('range'),
        );

        _setNumToSelectingPrice(
            document.getElementById('maxValue'),
            dataForMainInput.max,
        );
    }

    function _setNumToSelectingPrice(elem, value) {
        return elem.textContent = `${value}$`;
    }

    function _findoutMaxValueFromObj(obj) {
        let arr = [];

        for (const key in obj) {
            obj[key].forEach(e => {
                arr.push(e.price);
            });
        }

        dataForMainInput.max = Math.max(...arr);
    }

    function movementElem(elem, value, parcent, nameOfElem) {
        if (nameOfElem == 'left') {
            dataForMainInput.poisitonOfButtons.firButton = parcent;
            dataForMainInput.valueOfButtons.firButton = value;
        } else if (nameOfElem == 'right') {
            dataForMainInput.poisitonOfButtons.secButton = parcent;
            dataForMainInput.valueOfButtons.secButton = value;
        }

        elem._setPosition(parcent);
        _setNumToSelectingPrice(elem._getBeforeOfButton(), value)
    }

    function fillingBackground(elem, firstPosition, secondPosition) {
        return elem.style.background =
            `linear-gradient(
            to right, 
            rgb(183, 183, 183) ${firstPosition}%, 
            rgb(0, 204, 0) ${firstPosition}%, 
            rgb(0, 204, 0) ${secondPosition}%, 
            rgb(183, 183, 183) ${secondPosition}%
        )`;
    }

    function _setBanToLimit(min, max, value) {
        if (min > value || isNaN(value)) {
            return min;
        } else if (max < value) {
            return max;
        } else {
            return value;
        }
    }

    function _setPercentOfFillingForBackground(value, max) {
        return Math.round((value * 100) / max);
    }

    function scrollingForSelectPrice(elem, ...button) {
        elem.max = dataForMainInput.max;

        return elem.addEventListener('input', (e) => {
            let value = Number(e.currentTarget.value);

            if (Math.abs(value - dataForMainInput.valueOfButtons.firButton) < Math.abs(value - dataForMainInput.valueOfButtons.secButton)) {
                movementElem( //* elem, value, parcent, nameOfElem
                    button[0],
                    value,
                    _setPercentOfFillingForBackground(
                        value,
                        dataForMainInput.max
                    ),
                    'left');
            } else {
                movementElem( //* elem, value, parcent, nameOfElem
                    button[1],
                    value,
                    _setPercentOfFillingForBackground(
                        value,
                        dataForMainInput.max
                    ),
                    'right');
            }

            fillingBackground(
                e.currentTarget,
                Number(dataForMainInput.poisitonOfButtons.firButton),
                Number(dataForMainInput.poisitonOfButtons.secButton),
            );
        });
    }

    function inputtingForSelectPrice(button, input, elemToFillBackground) {
        const max = dataForMainInput.max,
            min = dataForMainInput.min;

        const nameOfFirstInput = 'fromPrice',
            nameOfSecondInput = 'untilPrice';

        input.forEach(
            elemFromClass => elemFromClass.element.addEventListener('input', (e) => {
                let value = Number(_setBanToLimit(min, max, e.currentTarget.value));

                if (elemFromClass._isEquilingBetweenClasses(nameOfFirstInput)) {
                    dataForMainInput.valueOfButtons.firButton = _setBanToLimit(min, max, value);

                    if (dataForMainInput.valueOfButtons.secButton > dataForMainInput.valueOfButtons.firButton) { 
                        movementElem( //* elem, value, parcent, nameOfElem
                            button[0],
                            _setBanToLimit(min, max, value),
                            _setPercentOfFillingForBackground(
                                _setBanToLimit(min, max, value),
                                dataForMainInput.max
                            ),
                            'left');
                    } else {
                        movementElem( //* elem, value, parcent, nameOfElem
                            button[0],
                            dataForMainInput.valueOfButtons.secButton,
                            _setPercentOfFillingForBackground(
                                _setBanToLimit(min, max, dataForMainInput.valueOfButtons.secButton),
                                dataForMainInput.max
                            ),
                            'left');
                    }
                }

                if (elemFromClass._isEquilingBetweenClasses(nameOfSecondInput)) { 
                    dataForMainInput.valueOfButtons.secButton = _setBanToLimit(min, max, value);

                    if (dataForMainInput.valueOfButtons.secButton > dataForMainInput.valueOfButtons.firButton) {
                        movementElem( //* elem, value, parcent, nameOfElem
                            button[1],
                            _setBanToLimit(min, max, value),
                            _setPercentOfFillingForBackground(
                                _setBanToLimit(min, max, value),
                                dataForMainInput.max
                            ),
                            'right');
                    } else { 
                        movementElem( //* elem, value, parcent, nameOfElem
                            button[1],
                            dataForMainInput.valueOfButtons.firButton,
                            _setPercentOfFillingForBackground(
                                _setBanToLimit(min, max, dataForMainInput.valueOfButtons.firButton),
                                dataForMainInput.max
                            ),
                            'right');

                        }
                    }
                    
                fillingBackground(
                    elemToFillBackground,
                    Number(dataForMainInput.poisitonOfButtons.firButton),
                    Number(dataForMainInput.poisitonOfButtons.secButton),
                );
            })
        );
    }

    __init__();
}

export default selectPrice;