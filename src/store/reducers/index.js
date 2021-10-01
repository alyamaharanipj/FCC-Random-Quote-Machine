import { combineReducers } from "redux";

import { quoteReducers } from "./quoteReducers";

export const reducers = combineReducers({
    quotes: quoteReducers
})

export const initialState = {}