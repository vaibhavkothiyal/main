import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer/Index"
import trunk from "redux-thunk"


export const store=createStore(rootReducer,applyMiddleware(trunk));