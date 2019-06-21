import React from "react";
import ReactDOM from "react-dom";

// MobX Router
import {startRouter} from 'mobx-router';
import store from "./stores/store";
import {Provider} from 'mobx-react';
import routes from "./config/routes";

import * as serviceWorker from "./utils/serviceWorker";
import { App } from "./container/App/App";

// BlueprintJS
import { FocusStyleManager } from "@blueprintjs/core";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./container/Index/index.scss";

startRouter(routes, store);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

FocusStyleManager.onlyShowFocusOnTabs();
