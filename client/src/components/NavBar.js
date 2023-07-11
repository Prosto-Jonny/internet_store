import {Context} from '../index';
import { useContext } from 'react';
import { MAIN_PAGE_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import logo from '../style/icons/logo.svg';
import likes from '../style/icons/likes.svg';
import cabinet from '../style/icons/cabinet.svg';
import basket from '../style/icons/basket.svg';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <header className="header">
        <div className="container">
            <div className="header__top">
                <nav className="header__menu">
                    <ul className="header__menu_list">
                        <li className="header__menu_item">
                            <Link className="header__menu_link" to='/'>
                                магазины
                            </Link>
                        </li>
                        <li className="header__menu_item">
                            <Link className="header__menu_link" to='/'>
                                акции
                            </Link>
                        </li>
                        <li className="header__menu_item">
                            <Link className="header__menu_link" to='/'>
                                доставка и оплата
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Link className="logo" to={MAIN_PAGE_ROUTE}>
                    <img className="logo__img" src={logo} alt="logo"/>
                </Link>

                <div className="header__box">
                    <p className="header__adress">
                        Самара, ул. Авроры 13
                    </p>
                    {user.isAuth ?
                        <ul className="user__list">
                            <li className="user__list-item">
                                <Link className="user__list-link" to='/likes'>
                                    <img src={likes} alt="Избранное"/>
                                </Link>
                            </li>
                            <li className="user__list-item">
                                <Link className="user__list-link" to='/cabinet'>
                                    <img src={cabinet} alt="Кабинет"/>
                                </Link>
                            </li>
                            <li className="user__list-item">
                                <Link className="user__list-link basket" to='/basket'>
                                    <img src={basket} alt="Корзина"/>
                                    <p className="basket__num">17</p>
                                </Link>
                            </li>
                        </ul>
                    :
                    <a className="user__list-link" href='#' onClick={() => user.setIsAuth(true)}>
                        <img src="../style/icons/cabinet.svg" alt="Вход"/>
                    </a>
                    }
                </div>
            </div>
        
            <div className="header__bottom">
                <ul className="menu-categories">
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Квадроциклы
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Катера
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Гидроциклы
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Лодки
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Вездеходы
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Снегоходы
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Двигатели
                        </a>
                    </li>
                    <li className="menu-categories__item">
                        <a className="menu-categories__link" href="#">
                            Запчасти
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    );
});

export default NavBar;