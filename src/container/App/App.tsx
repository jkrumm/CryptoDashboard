import { Classes, H1 } from "@blueprintjs/core";
import { inject, observer } from "mobx-react";
import { MobxRouter } from "mobx-router";
import React, { Component } from "react";
import { ILayoutStore } from "../../stores/LayoutStore";
import { router } from "../../stores/store";
import { Navigation } from "../Navigation/Navigation";
import "./App.scss";
import { Sidebar } from "../Sidebar/Sidebar";

interface IContainerProps {
    layoutStore?: ILayoutStore;
}

@inject("layoutStore")
@observer
export class App extends Component<IContainerProps> {
    public render() {
        // const { mainGrid } = this.props.layoutStore;
        return (
            <div className={`${Classes.DARK} app`}>
                <header className="app-header">
                    <div className="head-logo">
                        <H1>InSight</H1>
                    </div>
                    <div className="head-search">Search</div>
                    <div className="head-bar">Bar</div>
                    <div className="head-icon">Icons</div>
                </header>
                <main className={"main-grid-container"}>
                    <div className="navigation-wrapper">
                        <Navigation />
                    </div>
                    <div className="content-wrapper">
                        <MobxRouter store={router} />
                    </div>
                    <div className="sidebar-wrapper"><Sidebar/></div>
                </main>
            </div>
        );
    }
}
