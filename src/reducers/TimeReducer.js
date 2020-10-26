import {
    FETCH_TIME,
    FETCH_TIMES,
    CREATE_TIME,
    EDIT_TIME,
    DELETE_TIME
} from "../actions/types";

import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TIMES:
            return {...state, ..._.mapKeys(action.payload, 'id')};

        case FETCH_TIME:
            return {...state, [action.payload.id]: action.payload};

        case CREATE_TIME:
            return {...state, [action.payload.id]: action.payload};

        case EDIT_TIME:
            return {...state, [action.payload.id]: action.payload};

        case DELETE_TIME:
            return _.omit(state, action.payload);

        default:
            return state;
    }
}