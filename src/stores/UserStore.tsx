import { action, observable } from "mobx";

export interface IUserStore {
	name: string;
}

export class UserStore implements IUserStore {
	@observable name = "User";

	@action.bound
	changeName(name: string) {
		this.name = name;
	}
}
