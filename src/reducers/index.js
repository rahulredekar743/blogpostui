import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import timeReducer from './TimeReducer';

export default combineReducers({
    timeStamp: timeReducer,
    form: formReducer
})