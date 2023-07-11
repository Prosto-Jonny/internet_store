import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { MAIN_PAGE_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '../index';

const AppRouter = () => {
    // переменка для отображения авторизован или нет(заглушка пока что)
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key = {path} path = {path} component = {Component} exact></Route>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key = {path} path = {path} component = {Component} exact></Route>
            )}
            <Redirect to={MAIN_PAGE_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;