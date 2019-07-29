import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from './utils/history';

// MobX Router
import { Provider } from "mobx-react";
// import { routes } from "./config/routes";
import { store } from "./stores/store";

import App from "./container/App/App";
import * as serviceWorker from "./utils/serviceWorker";

// BlueprintJS
import { FocusStyleManager } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/table/lib/css/table.css";
import "normalize.css/normalize.css";
import "./styles/index.scss";
import { Auth } from "./utils/Auth";

export const auth = new Auth();

ReactDOM.render(
	<Router history={history}>
		<Provider {...store}>
			<App auth={auth} />
		</Provider>
	</Router>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

FocusStyleManager.onlyShowFocusOnTabs();
