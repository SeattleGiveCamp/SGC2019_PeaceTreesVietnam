import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createApplicationStore from "./store";

import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

const store = createApplicationStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
