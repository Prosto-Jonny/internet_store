import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._user = {}
        this._isAuth = false
        makeAutoObservable(this)
    }


    setAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    get User() {
        return this._user;
    }

    get Auth() {
        return this._isAuth;
    }
}