import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from './middlewares/async'
import reducers from "./reducers/index";
import stateValidator from './middlewares/stateValidator'

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(reducers, initialState, applyMiddleware(async,stateValidator))}
    >
      {children}
    </Provider>
  );
};
