import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
