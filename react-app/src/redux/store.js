import { createStore, applyMiddleware } from "redux";
import reduxlogger from "redux-logger"

import rootReducer from "./root-reducer";

const middlewares = [reduxlogger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
