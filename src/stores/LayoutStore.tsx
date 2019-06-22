import { action, observable } from "mobx";

// type mainGridVal = "" | "left" | "right" | "both";

export interface ILayoutStore {
    mainGrid: string;
    navCollapsed: boolean;
    toogleNavCollapse(): void;
}

export class LayoutStore implements ILayoutStore {
    @observable mainGrid = "";
    @observable navCollapsed = true;

    @action.bound toogleNavCollapse() {
        console.log("triggered");
        this.navCollapsed = !this.navCollapsed;
    }
}
