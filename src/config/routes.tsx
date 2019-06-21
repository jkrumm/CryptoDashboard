import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import {Home} from '../container/Home/Home';
import {Profile} from '../container/Profile/Profile';
import {CoinPage} from "../container/CoinPage/CoinPage";

const routes = {
    home: new Route({
        path: '/',
        component: <Home/>
    }),
    profile: new Route({
        path: '/profile/:tab',
        component: <Profile/>,
        onEnter: () => {
            console.log('entering user profile!');
        },
        beforeExit: () => {
            console.log('exiting user profile!');
        },
        onParamsChange: (route, params, store) => {
            console.log('params changed to', params);
        }
    }),
    coinPage: new Route({
        path: '/coin/',
        component: <CoinPage/>
    }),
};
export default routes;
