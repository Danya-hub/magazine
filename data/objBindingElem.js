export const objOfGroupForBinding = {
    mainPage: {
        button: `
            <button type="button" id="openBtn">
                <img src="https://i.postimg.cc/2yT4LY52/menu.png" alt="basket">
            </button>
        `,
        window: {
            mobVersion: `
                <div>
                    <a href="#" class="navFunctionsList-logoLink">
                        <img src="https://i.postimg.cc/LX4sFV8g/logo.png" alt="logo">
                    </a>
                    <button type="button" id="closeBtn">
                        <img src="https://i.postimg.cc/FH8D4wHw/close.png" alt="imgBtn" class="navFunctionsList-closeBtn-img">
                    </button>
                </div>
                <div>
                    <ul class="navFunctionsList-functions">
                        <li id="login">
                            <button>Войти</button>
                        <li id="regist">
                            <button>Регистрация</button>
                        </li>
                    </ul>
                    <nav id="links">
                        <ul class="navFunctionsList-links">
                            <li id="comic">
                                <a href="#magazine">Комиксы</a>
                            </li>
                            <li id="superhero">
                                <a href="#heroInfo">Супергерой</a>
                            </li>
                        </ul>
                    </nav>
                    <nav id="help">
                        <ul class="navFunctionsList-help">
                            <li>
                                <a href="./html/delivary.html">Доставка и оплата</a>
                            </li>
                            <li>
                                <a href="#">Возврат товара</a>
                            </li>
                            <li>
                                <a href="#">Как сделать заказ?</a>
                            </li>
                        </ul>
                    </nav>
                    <nav id="inform">
                        <ul class="navFunctionsList-help">
                            <li>
                                <a href="#">О нас</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                            <li>
                                <a href="#">Условия доставки</a>
                            </li>
                            <li>
                                <a href="#">Условия использования сайта</a>
                            </li>
                        </ul>
                    </nav>
                    <nav id="socialNetworks">
                        <ul class="navFunctionsList-socialNetworks">
                            <li id="facebook">
                                <a href="#">facebook</a>
                            </li>
                            <li id="instagram">
                                <a href="#">instagram</a>
                            </li>
                            <li id="twitter">
                                <a href="#">twitter</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            `,
            compVersion: `
                <section class="sidePanel">
                    <div class="sidePanel-wrapper">
                        <div id="help">
                            <h2 class="sidePanel-title">Помощь</h2>
                            <nav>
                                <ul class="sidePanel-listItems">
                                    <li class="sidePanel-listItems-item">
                                        <a href="./html/delivary.html">Доставка и оплата</a>
                                    </li>
                                    <li class="sidePanel-listItems-item">
                                        <a href="#">Возврат товара</a>
                                    </li>
                                    <li class="sidePanel-listItems-item">
                                        <a href="#">Как сделать заказ?</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div id="schedule">
                            <h2 class="sidePanel-title">График работы Call-центр</h2>
                            <ul class="sidePanel-listItems">
                                <li class="sidePanel-listItems-item">
                                    <span>В будние</span>
                                    <span>с 00:00 до 00:00</span>
                                </li>
                                <li class="sidePanel-listItems-item">
                                    <span>Суббота</span>
                                    <span>с 00:00 до 00:00</span>
                                </li>
                                <li class="sidePanel-listItems-item">
                                    <span>Воскресенье</span>
                                    <span>с 00:00 до 00:00</span>
                                </li>
                            </ul>
                        </div>
                        <div id="inform">
                            <h2 class="sidePanel-title">Информация о компании</h2>
                            <nav>
                                <ul class="sidePanel-listItems">
                                    <li class="sidePanel-listItems-item">
                                        <a href="#">О нас</a>
                                    </li>
                                    <li class="sidePanel-listItems-item">
                                        <a href="#">Контакты</a>
                                    </li>
                                    <li class="sidePanel-listItems-item">
                                        <a href="#">Условия доставки</a>
                                    </li>
                                    <li class="sidePanel-listItems-item">
                                        <a href="#">Условия использования сайта</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            `,
        },
    },
    pageDelivery: {
        button: `
            <button type="button" id="openBtn">
                <img src="https://i.postimg.cc/2yT4LY52/menu.png" alt="basket">
            </button>
        `,
        window: {
            mobVersion: `
                <div>
                    <a href="#" class="navFunctionsList-logoLink">
                        <img src="https://i.postimg.cc/LX4sFV8g/logo.png" alt="logo">
                    </a>
                    <button type="button" id="closeBtn">
                        <img src="https://i.postimg.cc/FH8D4wHw/close.png" alt="imgBtn" class="navFunctionsList-closeBtn-img">
                    </button>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Как забрать товар в магазине?</a>
                            </li>
                            <li>
                                <a href="#">Как оформить заказ? !!</a>
                            </li>
                            <li>
                                <a href="#">Сколько стоит доставка?</a>
                            </li>
                            <li>
                                <a href="#">Какими способами можно оплатить товар?</a>
                            </li>
                            <li>
                                <a href="#">Проверка отправлений</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            `,
            compVersion: `
                <section class="sidePanel">
                    <h2>Помощь: </h2>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Как забрать товар в магазине?</a>
                            </li>
                            <li>
                                <a href="#">Как оформить заказ? !!</a>
                            </li>
                            <li>
                                <a href="#">Сколько стоит доставка?</a>
                            </li>
                            <li>
                                <a href="#">Какими способами можно оплатить товар?</a>
                            </li>
                            <li>
                                <a href="#">Проверка отправлений</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            `,
        },
    }
}