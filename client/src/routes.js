// все маршруты к страницам приложения
import {ADMIN_ROUTE} from './utils/consts';
import Admin from './pages/Admin'

import {LOGIN_ROUTE} from './utils/consts';
import Auth from './pages/Admin'

import {BASKET_ROUTE} from './utils/consts';
import Basket from './pages/Admin'

import {REGISTRATION_ROUTE} from './utils/consts';

import {CATALOG_ROUTE} from './utils/consts';
import CatalogPage from './pages/Admin'

import {PRODUCT_CARD_ROUTE} from './utils/consts';
import ProductCard from './pages/Admin'

import {MAIN_PAGE_ROUTE} from './utils/consts';
import MainPage from './pages/Admin'

// авторизованные пользователи(только им доступны корзина и админ)
export const authRoutes = [
    {
        path: ADMIN_ROUTE,    // путь к странице
        Component: Admin
    },
    {
        path: BASKET_ROUTE,    // путь к странице
        Component: Basket
    }
]

// неавториз. пользователи
export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,    // путь к странице
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,    // путь к странице
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,    // путь к странице
        Component: Auth
    },
    {
        path: CATALOG_ROUTE,    // путь к странице
        Component: CatalogPage
    },
    {
        path: PRODUCT_CARD_ROUTE + '/:id',    // путь к странице товара(с указанием id)
        Component: ProductCard
    },
]


