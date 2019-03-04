import {combineReducers} from "redux";

import weatherReducer from "./weatherReducer";
import optionsReducer from "./optionsReducer";

export default combineReducers({
    weatherData: weatherReducer,
    options: optionsReducer,
})