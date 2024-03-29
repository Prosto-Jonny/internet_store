import { observer } from 'mobx-react-lite';
import React from 'react';

const MainSearch = () => {
    return (
        <div class="search page-section">
        <div class="container">
            <div class="search__inner">
                <div class="search__tabs">
                    <a class="tab search__tabs-item tab--active" href="#tab-1">Поиск по номеру</a>
                    <a class="tab search__tabs-item" href="#tab-2">Поиск по марке</a>
                    <a class="tab search__tabs-item" href="#tab-3">Поиск по названию товара</a>
                </div>
                <div class="search__content">
                    <div id="tab-1" class="tabs-content search__content-item tabs-content--active">
                        <form class="search__content-form">
                            <input class="search__content-input" type="text" placeholder="Введите номер"/>
                            <button class="search__content-btn" type="submit">искать</button>
                        </form>
                    </div>
                    <div id="tab-2" class="tabs-content search__content-item">
                        <form class="search__content-form">
                            <input class="search__content-input" type="text" placeholder="Введите марку"/>
                            <button class="search__content-btn" type="submit">искать</button>
                        </form>
                    </div>
                    <div id="tab-3" class="tabs-content search__content-item">
                        <form class="search__content-form">
                            <input class="search__content-input" type="text" placeholder="Введите название товара"/>
                            <button class="search__content-btn" type="submit">искать</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MainSearch;