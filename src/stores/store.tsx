/* tslint:disable object-literal-sort-keys */
import { CounterStore } from "./CounterStore";
import { CoinStore } from "./CoinStore";
import { UserStore } from "./UserStore";
import { LayoutStore } from "./LayoutStore";

export const store = {
	counterStore: new CounterStore(),
	coinStore: new CoinStore(),
	layoutStore: new LayoutStore(),
	userStore: new UserStore(),
};
