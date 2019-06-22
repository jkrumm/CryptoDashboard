import { Classes, H1 } from "@blueprintjs/core";
import { MobxRouter } from "mobx-router";
import React, { Component } from "react";
import { router } from "../../stores/store";
import "./App.scss";

export class App extends Component {
    public state = {
        main: "",
    };

    public render() {
        const { main } = this.state;
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
                <main className={"main-grid-container " + main}>
                    <div className="navigation-wrapper">TEST</div>
                    <div className="content-wrapper">
                        <MobxRouter store={router} />
                    </div>
                    <div className="sidebar-wrapper">TEST</div>
                </main>
            </div>
        );
    }
}
