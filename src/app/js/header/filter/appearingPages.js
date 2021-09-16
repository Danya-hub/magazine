const appearingPages = (data) => {
    function __init__() {
        _addSelectForNumberOfPage(
            document.querySelector('.filter-listSelectItems'), 
            _createArrWithNumberOfPages(_getMaxNumberOfPage(data), 5)
        );
    }

    function _addSelectForNumberOfPage(parentElem, numOfPage) {
        numOfPage.forEach((e, i) => {
            if (!isNaN(numOfPage[i+1])) {
                return parentElem.innerHTML += `
                    <li>
                        <input type="checkbox" id="filter-checkbox${i}">
                        <label for="filter-checkbox${i}">
                            <span> ${e+1} - ${numOfPage[i+1]} ст.</span>
                        </label>
                    </li>
                `;
            }
        })
    }

    function _createArrWithNumberOfPages(num, row) {
        let arr = [0];
        let ind = 0;

        while (ind < row) {
            ind++;
            arr.push(Math.round(num * (ind / row)));
        }

        return arr;
    }

    function _getMaxNumberOfPage(obj) {
        let arr = [];

        for (const entries in obj) {
            obj[entries].forEach(e => arr.push(e.page));
        }

        return Math.max(...arr);
    }

    __init__();
}

export default appearingPages;