{/* <button type="button" id="openBtn">
  <img src="https://i.postimg.cc/2yT4LY52/menu.png" alt="basket">
</button> */}
export const objectSections = {
    header: `   
    <a href="#" id="logoLink" title="Интернет магазин комиксов - №1">
            <img src="https://i.postimg.cc/LX4sFV8g/logo.png" alt="logo">
        </a>
        <div id="search">
            <form action="#" method="GET" class="header-form">
                <input type="text" class="header-form-inputSearch" placeholder="Найти..." title="Поиск"
                    required>
                <button type="button" id="searchBtn">
                    <img src="https://i.postimg.cc/c4wvz0Wj/loupe.png" alt="search">
                </button>
            </form>
        </div>
        <nav id="links">
            <ul class="header-listLinks">
                <li class="header-listLinks-item">
                    <a href="./index.html/#magazine" class="header-listLinks-itemsLink" id="linkComics">Комиксы</a>
                </li>
                <li class="header-listLinks-item">
                    <a href="#heroInfo" class="header-listLinks-itemsLink" id="linkDescrHeroes">Супергерой</a>
                </li>
            </ul>
        </nav>
        <button type="button" id="openBasket">
            <span class="countQuantityProducts">0</span>
            <img src="https://i.postimg.cc/cLzP8ygx/shopping-basket.png" alt="basket">
        </button>
    `,
    topHeader: `
    <div id="contacts">
            <span class="topHeader-location">г. Киев, район ****</span>
            <span class="topHeader-telNumber">+380 ** *** ****</span>
        </div>
        <nav id="socialNetWorks">
            <h3 class="topHeader-socialNetWorks-title">Мы в социальных сетях</h3>
            <ul class="topHeader-listSocialNetWorks">
                <li class="topHeader-listSocialNetWorks-items">
                    <a href="#" class="topHeader-listSocialNetWorks-itemLinks" id="facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li class="topHeader-listSocialNetWorks-items">
                    <a href="#" class="topHeader-listSocialNetWorks-itemLinks" id="instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="topHeader-listSocialNetWorks-items">
                    <a href="#" class="topHeader-listSocialNetWorks-itemLinks" id="twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <nav id="functions">
            <ul class="topHeader-functionsList">
                <li class="topHeader-functionsList-items">
                    <button type="button" id="login">
                        <div class="topHeader-functionsList-items-imgWrapper">
                            <img src="https://i.postimg.cc/Z5XD5820/login.png" alt="login">
                        </div>
                        <span class="topHeader-functionsList-items-txt">Войти</span>
                    </button>
                </li>
                <li class="topHeader-functionsList-items">
                    <button type="button" id="regist">
                        <div class="topHeader-functionsList-items-imgWrapper">
                            <img src="https://i.postimg.cc/nLTbTHkq/lock.png" alt="lock">
                        </div>
                        <span class="topHeader-functionsList-items-txt">Регистрация</span>
                    </button>
                </li>
                <li class="topHeader-functionsList-items">
                    <button type="button" id="openBasket">
                        <div class="topHeader-functionsList-items-imgWrapper">
                            <span class="countQuantityProducts">0</span>
                            <img src="https://i.postimg.cc/mgjBpNZc/black-shopping-basket.png" alt="basket">
                        </div>
                        <span class="topHeader-functionsList-items-txt">Корзина</span>
                    </button>
                </li>
            </ul>
        </nav>
    `,
    filter: `
        <button id="filterButton">
            <b>Фильтр</b>
        </button>
        <form action="" method="get" id="filterForm">
            <ul class="filter-list">
                <li class="filter-listItems" id="selectPrice">
                    <button>Цена</button>
                    <div class="filter-wrapper">
                        <div>
                            <div id="rangePrice">
                                <span id="minValue">0$</span>
                                <div class="filter-range">
                                    <button type="button" id="left">
                                        <span id="before">0$</span>
                                    </button>
                                    <input type="range" id="range" min="0" max="0">
                                    <button type="button" id="right">
                                        <span id="before">0$</span>
                                    </button>
                                </div>
                                <span id="maxValue">0$</span>
                            </div>
                            <div id="inputPrice">
                                <input type="text" id="fromPrice" placeholder="От">
                                <span>—</span>
                                <input type="text" id="untilPrice" placeholder="До">
                            </div>
                        </div>
                    </div>
                </li>
                <li class="filter-listItems" id="selectQuantityPages">
                    <button>Количество страниц</button>
                    <div class="filter-wrapper">
                        <div>
                            <ul class="filter-listSelectItems"></ul>
                        </div>
                    </div>
                </li>
                <li class="filter-listItems" id="popularComics">
                    <button>Популярность</button>
                    <div class="filter-wrapper">
                        <ul>
                            <li>
                                <input type="radio" id="filter-sortRadio1" name="sort">
                                <label for="filter-sortRadio1">
                                    <span>Сортирование по увеличению</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="filter-sortRadio2" name="sort">
                                <label for="filter-sortRadio2">
                                    <span>Сортирование по убыванию</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="filter-listItems" id="gift">
                    <button>Подарок</button>
                    <div class="filter-wrapper">
                        <ul>
                            <li>
                                <input type="radio" id="filter-selectGenderRadio1" name="selectGender">
                                <label for="filter-selectGenderRadio1">
                                    <span>парню</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="filter-selectGenderRadio2" name="selectGender">
                                <label for="filter-selectGenderRadio2">
                                    <span>девушке</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="filter-selectGenderRadio3" name="selectGender">
                                <label for="filter-selectGenderRadio3">
                                    <span>ребенку</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <input type="submit" value="Применить" id="submit">
        </form>
    `,
    footer: `
        <section class="footer">
            <a href="#" class="footer-logo">
                <img src="https://i.postimg.cc/LX4sFV8g/logo.png" alt="logo">
            </a>
            <div>
                <h2 class="footer-title">Социальные сети:</h2>
                <nav id="socialNetWorks">
                    <ul class="footer-socialNetWorksList">
                        <li class="footer-socialNetWorksList-items" id="facebook">
                            <a href="#">facebook</a>
                        </li>
                        <li class="footer-socialNetWorksList-items" id="instagram">
                            <a href="#">instagram</a>
                        </li>
                        <li class="footer-socialNetWorksList-items" id="twitter">
                            <a href="#">twitter</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h2 class="footer-title">Переход на секцию:</h2>
                <nav id="links">
                    <ul class="footer-listOfLinks">
                        <li class="footer-listOfLinks-items" id="comics">
                            <a href="#magazine">Комиксы</a>
                        </li>
                        <li class="footer-listOfLinks-items" id="hero">
                            <a href="#heroInfo">Супергерой</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <span class="footer-location">г. Киев, район ****</span>
                <span class="footer-telNumber">+380 ** *** ****</span>
            </div>
        </section>
    `,
//     sidePanel: `
//     <section class="sidePanel">
//     <div class="sidePanel-wrapper">
//         <div id="help">
//             <h2 class="sidePanel-title">Помощь</h2>
//             <nav>
//                 <ul class="sidePanel-listItems">
//                     <li class="sidePanel-listItems-item">
//                         <a href="./html/delivary.html">Доставка и оплата</a>
//                     </li>
//                     <li class="sidePanel-listItems-item">
//                         <a href="#">Возврат товара</a>
//                     </li>
//                     <li class="sidePanel-listItems-item">
//                         <a href="#">Как сделать заказ?</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//         <div id="schedule">
//             <h2 class="sidePanel-title">График работы Call-центр</h2>
//             <ul class="sidePanel-listItems">
//                 <li class="sidePanel-listItems-item">
//                     <span>В будние</span>
//                     <span>с 00:00 до 00:00</span>
//                 </li>
//                 <li class="sidePanel-listItems-item">
//                     <span>Суббота</span>
//                     <span>с 00:00 до 00:00</span>
//                 </li>
//                 <li class="sidePanel-listItems-item">
//                     <span>Воскресенье</span>
//                     <span>с 00:00 до 00:00</span>
//                 </li>
//             </ul>
//         </div>
//         <div id="inform">
//             <h2 class="sidePanel-title">Информация о компании</h2>
//             <nav>
//                 <ul class="sidePanel-listItems">
//                     <li class="sidePanel-listItems-item">
//                         <a href="#">О нас</a>
//                     </li>
//                     <li class="sidePanel-listItems-item">
//                         <a href="#">Контакты</a>
//                     </li>
//                     <li class="sidePanel-listItems-item">
//                         <a href="#">Условия доставки</a>
//                     </li>
//                     <li class="sidePanel-listItems-item">
//                         <a href="#">Условия использования сайта</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </div>
// </section>
//     `,
    windowBasket: `            
        <button type="button" id="closeBasket">
            <img src="https://i.postimg.cc/FH8D4wHw/close.png" alt="imgBtn">
        </button>
        <h2 class="windowBasket-title">Корзина</h2>
        <div class="windowBasket-wrapper"></div>
    `,
    // navFunctionsList: `
    //     <div>
    //         <a href="#" class="navFunctionsList-logoLink">
    //             <img src="https://i.postimg.cc/LX4sFV8g/logo.png" alt="logo">
    //         </a>
    //         <button type="button" id="closeBtn">
    //             <img src="https://i.postimg.cc/FH8D4wHw/close.png" alt="imgBtn" class="navFunctionsList-closeBtn-img">
    //         </button>
    //     </div>
    //     <div>
    //         <ul class="navFunctionsList-functions">
    //             <li id="login">
    //                 <button>Войти</button>
    //             <li id="regist">
    //                 <button>Регистрация</button>
    //             </li>
    //         </ul>
    //         <nav id="links">
    //             <ul class="navFunctionsList-links">
    //                 <li id="comic">
    //                     <a href="#magazine">Комиксы</a>
    //                 </li>
    //                 <li id="superhero">
    //                     <a href="#heroInfo">Супергерой</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //         <nav id="help">
    //             <ul class="navFunctionsList-help">
    //                 <li>
    //                     <a href="./html/delivary.html">Доставка и оплата</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Возврат товара</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Как сделать заказ?</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //         <nav id="inform">
    //             <ul class="navFunctionsList-help">
    //                 <li>
    //                     <a href="#">О нас</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Контакты</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Условия доставки</a>
    //                 </li>
    //                 <li>
    //                     <a href="#">Условия использования сайта</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //         <nav id="socialNetworks">
    //             <ul class="navFunctionsList-socialNetworks">
    //                 <li id="facebook">
    //                     <a href="#">facebook</a>
    //                 </li>
    //                 <li id="instagram">
    //                     <a href="#">instagram</a>
    //                 </li>
    //                 <li id="twitter">
    //                     <a href="#">twitter</a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>
    // `,
}