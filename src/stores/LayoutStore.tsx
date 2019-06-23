import { action, observable } from "mobx";

// type mainGridVal = "" | "left" | "right" | "both";

export interface ILayoutStore {
    mainGrid: string;
    navCollapsed: boolean;
    sidebarCollapsed: boolean;
    toogleSidebarCollapse(): void;
    sidebarTab: string;
    changeSidebarTab(tab: string): void;
}

function getMainGrid(nav: boolean, sidebar: boolean) {
    if (nav === true && sidebar === true) return 'both';
    if (nav === true && sidebar === false) return 'left';
    if (nav === false && sidebar === true) return 'right';
    return '';
}

export class LayoutStore implements ILayoutStore {
    @observable mainGrid = "";
    @observable navCollapsed = false;
    @observable sidebarCollapsed = false;
    @observable sidebarTab = "Favorites";

    @action.bound
    toogleSidebarCollapse() {
        this.mainGrid =  getMainGrid(this.navCollapsed, !this.sidebarCollapsed);
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

    @action.bound
    changeSidebarTab(tab) {
        this.sidebarCollapsed = true;
        this.mainGrid =  getMainGrid(this.navCollapsed, true);
        this.sidebarTab = tab;
    }
}
