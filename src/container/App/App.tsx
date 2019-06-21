import React from "react";
import {MobxRouter} from 'mobx-router';
import {Button} from "@blueprintjs/core";
import "./App.scss";

export const App: React.FC = () => {
    return (
        <div className="app bp3-dark">
            <header className="app-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>Edit src/App.tsx and save to reload.</p>
                <Button>HELLO</Button>
                <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <MobxRouter/>
            </header>
        </div>
    );
};
