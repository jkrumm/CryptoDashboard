import { RouterStore } from "mobx-router";
import { CounterStore } from "./CounterStore";
import { CoinStore } from "./CoinStore";
import { UserStore } from "./UserStore";
import { LayoutStore } from "./LayoutStore";

export const router = { router: new RouterStore() };

export const store = {
	counterStore: new CounterStore(),
	coinStore: new CoinStore(),
	layoutStore: new LayoutStore(),
	userStore: new UserStore(),
	router: router.router,
};
