

const ProductCard = () => {
    return (
        <div>
                <section class="product-card">
        <div class="container">
            <div class="product-card__inner">
                <div class="product-card__img-box product-item--sale">
                    <img src="img/foto_pageProduct.png" alt="product" class="product-card__img"/>
                    <p class="product-card__price-old">
                        1 200 475 ₽
                    </p>
                    <p class="product-card__price-new">
                        1 100 475 ₽
                    </p>
                    <a href="#" class="product-card__link">Нашли дешевле? Снизим цену!</a>
                </div>

                <div class="product-card__content">
                    <h1 class="product-card__title">
                        Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                    </h1>
                    <div class="product-card__code">
                        Код товара: 	366666-2 
                    </div>
                    <div class="product-card__btns">
                        <a href="#" class="product-card__icon-favorite"><img src="icons/likes.svg" alt="favorite"/></a>
                        <a href="#" class="product-card__icon-comparison"><img src="icons/Group.svg" alt="comparison"/></a>
                        <a href="#" class="rate"><div class="rate-yo" data-rateyo-rating="4"></div></a>
                    </div>

                    <div class="tabs-wrapper product-card__tabs">
                        <div class="tabs">
                            <a href="#product-1" class="tab product-card__tab tab--active">Характеристики</a>
                            <a href="#product-2" class="tab product-card__tab">Наличие в магазине</a>
                        </div>
                        <div class="tabs-container">
                            <div id="product-1" class="tabs-content product-card__tab-content tabs-content--active">
                                <ul class="product-card__list">
                                    <li class="product-card__list-item">
                                        <div class="product-card__item-key">Производитель</div>
                                        <div class="product-card__item-meaning">Канада</div>
                                    </li>
                                    <li class="product-card__list-item">
                                        <div class="product-card__item-key">Количество мест, шт: </div>
                                        <div class="product-card__item-meaning">3</div>
                                    </li>
                                    <li class="product-card__list-item">
                                        <div class="product-card__item-key">Мощность, л.с.</div>
                                        <div class="product-card__item-meaning">155</div>
                                    </li>
                                    <li class="product-card__list-item">
                                        <div class="product-card__item-key">Тип двигателя</div>
                                        <div class="product-card__item-meaning">Бензиновый</div>
                                    </li>
                                    <li class="product-card__list-item">
                                        <div class="product-card__item-key">Год выпуска</div>
                                        <div class="product-card__item-meaning">2018</div>
                                    </li>
                                </ul>
                                <div class="product-card__more filter-more">
                                    <a href="#" class="filter-more_link">Показать ещё</a>
                                </div>
                                <button type="submit" class="product-card__btn filter-btn__send filter-btn__send--active">Выбрать</button>
                            </div>
                            <div id="product-2" class="tabs-content product-card__tab-content">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default ProductCard;