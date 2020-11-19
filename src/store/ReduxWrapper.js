import * as React from "react";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "~/store/ducks";

const getStore = () =>
  createStore(rootReducer, applyMiddleware(thunk, createLogger({ collapsed: true })));

const store = getStore();

export default ({ element }) => <Provider store={store}>{element}</Provider>;
