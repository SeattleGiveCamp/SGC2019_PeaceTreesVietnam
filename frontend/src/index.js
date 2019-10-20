import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createApplicationStore from "./store";
import { BrowserRouter } from 'react-router-dom'


import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

const store = createApplicationStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
