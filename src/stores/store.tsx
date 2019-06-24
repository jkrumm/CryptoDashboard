import { RouterStore } from "mobx-router";
import { CounterStore } from "./CounterStore";
import { LayoutStore } from "./LayoutStore";

export const router = { router: new RouterStore() };

export const store = {
	counterStore: new CounterStore(),
	layoutStore: new LayoutStore(),
	router: router.router,
};
