import { action, observable } from "mobx";

export interface ILayoutStore {
    mainGrid: string | "" | "left" | "right" | "both";
    navCollapsed: boolean;
    sidebarCollapsed: boolean;
    toogleSidebarCollapse(): void;
    toogleNavCollapse(): void;
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
    toogleNavCollapse() {
        this.mainGrid =  getMainGrid(!this.navCollapsed, this.sidebarCollapsed);
        this.navCollapsed = !this.navCollapsed;
    }

    @action.bound
    changeSidebarTab(tab: string) {
        if (tab === this.sidebarTab && this.sidebarCollapsed === true) {
            this.sidebarCollapsed = false;
            this.mainGrid =  getMainGrid(this.navCollapsed, false);
        } else {
            this.sidebarCollapsed = true;
            this.mainGrid =  getMainGrid(this.navCollapsed, true);
            this.sidebarTab = tab;
        }
    }
}
