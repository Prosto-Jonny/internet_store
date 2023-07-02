import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._brands = []
        this._products = []
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