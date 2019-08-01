/* tslint:disable object-literal-sort-keys */
import { CounterStore } from "./Counter.store";
import { CoinStore } from "./Coin.store";
import { UserStore } from "./User.store";
import { LayoutStore } from "./Layout.store";

export const store = {
	counterStore: new CounterStore(),
	coinStore: new CoinStore(),
	layoutStore: new LayoutStore(),
	userStore: new UserStore(),
};
