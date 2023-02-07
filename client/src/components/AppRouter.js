import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes } from '../routes';
import { publicRoutes } from '../routes';
import { MAIN_PAGE_ROUTE } from '../utils/consts';

const AppRouter = () => {
    // переменка для отображения авторизован или нет(заглушка пока что)
    const stateAuth = false; 
    return (
        <Switch>
            {stateAuth && authRoutes.map(({path, Component}) => {
                <Route key = {path} path = {path} Component = {Component} exact></Route>
            })}
            {publicRoutes.map(({path, Component}) => {
                <Route key = {path} path = {path} Component = {Component} exact></Route>
            })}
            <Redirect to={MAIN_PAGE_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;