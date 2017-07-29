import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import * as APIService from './services/api/APIService';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        APIService.checkAuthLogin() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login'
            }}/>
        )
    )}/>
);


export default PrivateRoute;