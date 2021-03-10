import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { checkLoggedIn } from "./util/session";
let preloadedState = {};
const store = configureStore(preloadedState);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// FOR TESTING, remove before production
window.getState = store.getState;

const renderApp = (preloadedState) => {
  const store = configureStore(preloadedState);
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};
(async () => renderApp(await checkLoggedIn()))();
