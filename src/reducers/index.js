import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import blogReducer from './BlogReducer';

export default combineReducers({
    blogPost: blogReducer,
    form: formReducer
})