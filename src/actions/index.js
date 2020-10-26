import {
    CREATE_TIME,
    FETCH_TIME,
    FETCH_TIMES,
    EDIT_TIME,
    DELETE_TIME
} from "./types";

import timeStamp from '../apis/timestamp';

import history from '../history';

export const createTime = (formValues) => {
    console.log('action', formValues)
    return async (dispatch) => {
        const response = await timeStamp.post('/timeStamp', {...formValues});

        dispatch({type: CREATE_TIME, payload: response.data});
        history.push('/');
    }
};

export const fetchTimes = () => {
    return async (dispatch) => {
        const response = await timeStamp.get('/timeStamp');

        dispatch({type: FETCH_TIMES, payload: response.data})
    }
};

export const fetchTime = (id) => {
    return async (dispatch) => {
        const response = await timeStamp.get(`/timeStamp/${id}`);

        dispatch({type: FETCH_TIME, payload: response.data})
    }
};

export const editTime = (id, formValues) => {
    return async (dispatch) => {
        const response = await timeStamp.patch(`/timeStamp/${id}`, formValues);

        dispatch({type: EDIT_TIME, payload: response.data});

        history.push(`/`);
    }
};

export const deleteTime = (id) => {
    return async (dispatch) => {
        await timeStamp.delete(`/timeStamp/${id}`);

        dispatch({type: DELETE_TIME, payload: id});

        history.push(`/`);
    }
};