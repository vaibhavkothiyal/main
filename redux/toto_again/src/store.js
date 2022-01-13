import { createStore, combineReducers } from "redux";
import { todoReducer } from "./features/todos/reduces";

const rootReducer=combineReducers({
    todo:todoReducer
});

export const store=createStore(rootReducer);
// console.log(store.getState())