import React from 'react';

const TypeBar = () => {
    return (
        <aside class="catalog__inner-aside aside-filter">
					<div class="tabs-wrapper">
						<div class="tabs aside__filters">
							<a href="#parameters" class="tab aside__filters_tab tab--active">Параметры</a>
							<a href="#marks" class="tab aside__filters_tab">по марке</a>
						</div>
						<div class="tabs-container">
							<div id="#parameters" class="tabs-content aside-filter__tabs-content tabs-content--active">

								<form class="aside-filter__form">
									<ul class="aside-filter__list">
										<li class="aside-filter__item-drop">
											<p class="aside-filter_title filter__item-drop">Наличие</p>
											<div class="aside-filter_point">
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														В наличии
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Под заказ
													</label>
												</div>
											</div>
										</li>

										<li class="aside-filter__item-drop">
											<p class="aside-filter_title filter__item-drop">Новинки</p>
											<div class="aside-filter_point">
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input name="radio" type="radio" class="filter-style"/>
														Все
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input name="radio" type="radio" class="filter-style"/>
														Под заказ
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input name="radio" type="radio" class="filter-style"/>
														Акции
													</label>
												</div>
											</div>
										</li>
										<li class="aside-filter__item-drop">
											<p class="aside-filter_title filter__item-drop">Цена</p>
											<div class="aside-filter_point">
												<input type="text" 
												class="js-range-slider"
												id="input_id" 
												name="my_range" 
												value="" 
												data-type="double"
												data-min="100000"
												data-max="500000"
												data-from="150000"
												data-to="275000"
												data-grid="false"/>
											</div>
										</li>
										<li class="aside-filter__item-list">

											<div class="filter__item-list">
												<p class="filter__item-list_title">
													Мощность, л.с.
												</p>
												<select class="filter_style filter__item-list_options">
													<option>90</option>
													<option>130</option>
													<option>154</option>
													<option>230</option>
												</select>
											</div>
											<div class="filter__item-list">
												<p class="filter__item-list_title">
													Мощность двигателя, л.с.
												</p>
												<select class="filter_style filter__item-list_options">
													<option>90</option>
													<option>130</option>
													<option>154</option>
													<option>230</option>
												</select>
											</div>
											<div class="filter__item-list">
												<p class="filter__item-list_title">
													Макс. скорость
												</p>
												<select class="filter_style filter__item-list_options">
													<option>90</option>
													<option>130</option>
													<option>154</option>
													<option>230</option>
												</select>
											</div>
										</li>

										<li class="aside-filter__item-drop">
											<p class="aside-filter_title filter__item-drop">Бренд</p>
											<div class="aside-filter_point">
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														BRP
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Spark 2
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Spark 3
													</label>
												</div>
												<div class="filter-more">
													<a href="#" class="filter-more_link">Показать ещё</a>
												</div>
											</div>
										</li>

										<li class="aside-filter__item-drop">
											<p class="aside-filter_title filter__item-drop">Модель</p>
											<div class="aside-filter_point">
												<input type="text" class="filter_search" placeholder="Введите марку"/>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Sea-doo Spark 2
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														SeaDoo Spark 90 
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														SeaDoo GTI 155
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														SSeaDoo GTR 230
													</label>
												</div>
												<div class="filter-more">
													<a href="#" class="filter-more_link">Показать ещё</a>
												</div>
											</div>
										</li>

										<li class="aside-filter__item-drop btn-cheked">
											<p class="aside-filter_title filter__item-drop">Акции</p>
											<div class="aside-filter_point">
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														<span class="btn-cheked__text">SALE</span>
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														<span class="btn-cheked__text">NEW</span>
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														<span class="btn-cheked__text">HIT</span>
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														<span class="btn-cheked__text">ДИЛЕР</span>
													</label>
												</div>
											</div>
										</li>

										<li class="aside-filter__item-drop">
											<p class="aside-filter_title filter__item-drop">Страны</p>
											<div class="aside-filter_point">
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Россия
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Германия
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														Китай
													</label>
												</div>
												<div class="aside-filter__content-box">
													<label class= "aside-filter__content-label">
														<input type="checkbox" class="filter-style"/>
														США
													</label>
												</div>
												<div class="filter-more">
													<a href="#" class="filter-more_link">Показать ещё</a>
												</div>
											</div>
										</li>
										<li class="aside-filter__item-drop"></li>

										<li class="aside-filter__item-drop aside-filter__item-btn">
											<button type="submit" class="filter-btn__send filter-btn__send--active">Выбрать</button>
											<button type="submit" class="filter-btn__reset"> Сбросить фильтр</button>
										</li>
									</ul>
								</form>
							</div>
							<div id="#marks" class="tabs-content aside-filter__tabs-content">
							</div>
						</div>
					</div>
				</aside>
    );
};

export default TypeBar;