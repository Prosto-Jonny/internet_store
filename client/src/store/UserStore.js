import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._user = {}
        this._isAuth = true
        makeAutoObservable(this)
    }


    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    get User() {
        return this._user;
    }

    get isAuth() {
        return this._isAuth;
    }
}