import { RouterStore } from "mobx-router";
import { CounterStore } from "./CounterStore";

export const router = { router: new RouterStore() };

export const store = {
    counterStore: new CounterStore(),
    router: router.router,
};
