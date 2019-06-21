import React, {Component} from "react";
import {MobxRouter} from 'mobx-router';
import "./App.scss";

export class App extends Component {
    state = {
        main: ''
    };

    render () {
        const { main } = this.state;

        return (
            <div className="app bp3-dark">
                <header className="app-header">
                    <div className="head-logo"><h1>InSight</h1></div>
                    <div className="head-search">Search</div>
                    <div className="head-bar">Bar</div>
                    <div className="head-icon">Icons</div>
                </header>
                <main className={"main-grid-container " + main}>
                    <div className="navigation-wrapper">TEST</div>
                    <div className="content-wrapper"><MobxRouter/></div>
                    <div className="sidebar-wrapper">TEST</div>
                </main>
            </div>
        );
    };
}
