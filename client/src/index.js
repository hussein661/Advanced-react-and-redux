import React from "react";
import ReactDom from "react-dom";
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
//end of redux
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
