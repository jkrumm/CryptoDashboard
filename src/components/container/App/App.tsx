import React from "react";
// import logo from "../../.../logo.svg";
import "./App.scss";

export const App: React.FC = () => {
    return (
        <div className="app">
            <header className="app-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>Edit src/App.tsx and save to reload.</p>
                <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};
