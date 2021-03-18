import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootStore } from "../rootStore/rootStore";

export const store = createStore(rootStore, applyMiddleware(thunk))