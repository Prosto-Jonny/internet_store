import {Context} from '../index';
import { useContext } from 'react';
import { MAIN_PAGE_ROUTE } from '../utils/consts';
import { observable } from 'mobx';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <NavBar>
        <header class="header">
        <div class="container">
            <div class="header__top">
                <nav class="header__menu">
                    <ul class="header__menu_list">
                        <li class="header__menu_item">
                            <Link className="header__menu_link" to='/'>
                                магазины
                            </Link>
                        </li>
                        <li class="header__menu_item">
                            <Link className="header__menu_link" to='/'>
                                акции
                            </Link>
                        </li>
                        <li class="header__menu_item">
                            <Link className="header__menu_link" to='/'>
                                доставка и оплата
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Link className="logo" to={MAIN_PAGE_ROUTE}>
                    <img className="logo__img" src="style/icons/logo.svg" alt="logo"/>
                </Link>

                <div class="header__box">
                    <p class="header__adress">
                        Самара, ул. Авроры 13
                    </p>
                    {user.isAuth ?
                        <ul class="user__list">
                            <li class="user__list-item">
                                <Link className="user__list-link" to='/likes'>
                                    <img src="../style/icons/likes.svg" alt="Избранное"/>
                                </Link>
                            </li>
                            <li class="user__list-item">
                                <Link className="user__list-link" to='/cabinet'>
                                    <img src="../style/icons/cabinet.svg" alt="Кабинет"/>
                                </Link>
                            </li>
                            <li class="user__list-item">
                                <Link className="user__list-link basket" href="#">
                                    <img src="../style/icons/basket.svg" alt="Корзина"/>
                                    <p className="basket__num">17</p>
                                </Link>
                            </li>
                        </ul>
                    :
                    <a class="user__list-link" href='#' onClick={() => user.setIsAuth(true)}>
                        <img src="../style/icons/cabinet.svg" alt="Вход"/>
                    </a>
                    }
                </div>
            </div>
        
            <div class="header__bottom">
                <ul class="menu-categories">
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Квадроциклы
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Катера
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Гидроциклы
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Лодки
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Вездеходы
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Снегоходы
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Двигатели
                        </a>
                    </li>
                    <li class="menu-categories__item">
                        <a class="menu-categories__link" href="#">
                            Запчасти
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </NavBar>
    );
};

export default NavBar;