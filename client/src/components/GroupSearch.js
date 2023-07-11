import React from 'react';
import { Link } from 'react-router-dom';

import cat_1 from '../img/categories-1.png';
import cat_2 from '../img/categories-2.png';
import cat_3 from '../img/categories-3.png';
import cat_4 from '../img/categories-4.png';
import cat_5 from '../img/categories-5.png';
import cat_6 from '../img/categories-6.png';
import { CATALOG_ROUTE } from '../utils/consts';

const GroupSearch = () => {
    return (
        <section className="categories page-section">
        <div className="container">
            <div className="categories__inner">
                <Link className="categories__item" to={CATALOG_ROUTE}>
                    <div className="categories__item-info">
                        <h4 className="categories__item-tittle">Квадроциклы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src={cat_1} alt="cat_1"/>
                    </div>
                </Link>
                <Link className="categories__item" to={CATALOG_ROUTE}>
                    <div className="categories__item-info">
                        <h4 className="categories__item-tittle">Гидроциклы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src={cat_2} alt="cat_2"/>
                    </div>
                </Link>
                <Link className="categories__item" to={CATALOG_ROUTE}>
                    <div className="categories__item-info">
                        <h4 className="categories__item-tittle">Катера</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src={cat_3} alt="cat_3"/>
                    </div>
                </Link>
                <Link className="categories__item" to={CATALOG_ROUTE}>
                    <div className="categories__item-info">
                        <h4 className="categories__item-tittle">Снегоходы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src={cat_4} alt="cat_4"/>
                    </div>
                </Link>
                <Link className="categories__item" to={CATALOG_ROUTE}>
                    <div className="categories__item-info">
                        <h4 className="categories__item-tittle">Вездеходы</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <img className="categories__item-img" src={cat_5} alt="cat_5"/>
                </Link>
                <Link className="categories__item" to={CATALOG_ROUTE}>
                    <div className="categories__item-info">
                        <h4 className="categories__item-tittle">Двигатели</h4>
                        <p className="categories__item-text">Подробнее</p>
                    </div>
                    <div className="categories__item-img">
                        <img src={cat_6} alt="cat_6"/>
                    </div>
                </Link>
            </div>
        </div>
    </section>
    );
};

export default GroupSearch;