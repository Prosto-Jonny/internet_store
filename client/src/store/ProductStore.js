import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id:1, name: 'Квадроциклы'},
            {id:2, name: 'Катера'},
            {id:3, name: 'Гидроциклы'},
            {id:4, name: 'Лодки'},
            {id:5, name: 'Вездеходы'},
            {id:6, name: 'Снегоходы'},
            {id:7, name: 'Двигатели'},
            {id:8, name: 'Запчасти'},
            {id:9, name: 'Электроника'},
            {id:10, name: 'Инструменты'},
            {id:11, name: 'Аксессуары'},
        ]
        this._brands = [
            {id:1, name: 'BRP'},
            {id:2, name: 'Garmin'},
            {id:3, name: 'RF'},
            {id:4, name: 'Spark 2'},
            {id:5, name: 'Spark 3'},
            {id:6, name: 'Hiroku'},
            {id:7, name: 'Motorolla'},
            {id:8, name: 'Huawei'},
            {id:9, name: 'Nokia'},
            {id:10, name: 'Hiper'},
            {id:11, name: 'Audi'},
            {id:12, name: 'Mersedes'},
            {id:13, name: 'BMW'},
        ]
        this._products = [
            {id:1, name: 'SeaDoo GTI 155hp SE Long Blue Metallic', price: 1100475, rating: 4.5, img: 'https://c0.klipartz.com/pngpicture/896/686/gratis-png-sea-doo-personal-agua-embarcaciones-jet-ski-bombardier-productos-recreativos-moto-acuatica-amarillo-y-gris.png'},
            {id:2, name: 'SeaDoo GTI 130hp SE Black/Mango', price: 1100475, rating: 4.5, img: 'https://c0.klipartz.com/pngpicture/896/686/gratis-png-sea-doo-personal-agua-embarcaciones-jet-ski-bombardier-productos-recreativos-moto-acuatica-amarillo-y-gris.png'},
            {id:3, name: 'UP 900 Ho Ace Chili Pepper', price: 1100475, rating: 4.5, img: 'https://c0.klipartz.com/pngpicture/896/686/gratis-png-sea-doo-personal-agua-embarcaciones-jet-ski-bombardier-productos-recreativos-moto-acuatica-amarillo-y-gris.png'},
            {id:4, name: 'SeaDoo GTI 155hp SE Long Blue Metallic', price: 1100475, rating: 4.5, img: 'https://c0.klipartz.com/pngpicture/896/686/gratis-png-sea-doo-personal-agua-embarcaciones-jet-ski-bombardier-productos-recreativos-moto-acuatica-amarillo-y-gris.png'},
            {id:5, name: 'SeaDoo GTI 155hp SE Long Blue Metallic', price: 1100475, rating: 4.5, img: 'https://c0.klipartz.com/pngpicture/896/686/gratis-png-sea-doo-personal-agua-embarcaciones-jet-ski-bombardier-productos-recreativos-moto-acuatica-amarillo-y-gris.png'},
            {id:6, name: 'SeaDoo GTI 155hp SE Long Blue Metallic', price: 1100475, rating: 4.5, img: 'https://c0.klipartz.com/pngpicture/896/686/gratis-png-sea-doo-personal-agua-embarcaciones-jet-ski-bombardier-productos-recreativos-moto-acuatica-amarillo-y-gris.png'},
        ]
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setProducts(products){
        this._products = products;
    }

    get products() {
        return this._products;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands
    }
}