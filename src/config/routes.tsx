import React from "react";

// models
import { Route } from "mobx-router";
import { Home } from "../container/Home/Home";
// import { CounterStore } from "../stores/CounterStore";

// components
import { CoinPage } from "../container/CoinPage/CoinPage";
// import { Home } from "../container/Home/Home";
import { Profile } from "../container/Profile/Profile";

export const routes = {
    coinPage: new Route({
        component: <CoinPage />,
        path: "/coin/",
    }),
    home: new Route({
        component: <Home />,
        path: "/",
    }),
    profile: new Route({
        component: <Profile />,
        path: "/profile/:tab",
        onEnter: () => {
            console.log("entering user profile!");
        },
        beforeExit: () => {
            console.log("exiting user profile!");
        },
        onParamsChange: (route, params, store) => {
            console.log("params changed to", params);
        },
    }),
};
