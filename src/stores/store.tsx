import { RouterStore } from "mobx-router";
import { CounterStore } from "./CounterStore";

export const store = {
    counterStore: new CounterStore(),
    router: new RouterStore(),
};
