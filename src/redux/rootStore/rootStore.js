import { combineReducers } from "redux";
import { randomUserReducer } from "../randomUser/randomUserReducer";
import { restCountryReducer } from "../restCountry/restCountryReducer";
import { userReducer } from "../user/userReducer";

export const rootStore = combineReducers({
    users : userReducer,
    randomUsers : randomUserReducer,
    restCountry : restCountryReducer
})