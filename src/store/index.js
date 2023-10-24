// src/store/index.js

import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { legacy_createStore as createStore} from 'redux'
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const firstReducer = { main: null};
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;