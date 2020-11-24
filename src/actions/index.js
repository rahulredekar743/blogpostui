import {
    CREATE_POST,
    FETCH_POST,
    FETCH_POSTS
} from "./types";

import blogpost from '../apis/blogpost';

import history from '../history';

export const createPost = (formValues) => {
    console.log('action', formValues);
    return async (dispatch) => {
        const response = await blogpost.post('/blogPost', {...formValues});

        dispatch({type: CREATE_POST, payload: response.data});
        history.push('/');
    }
};

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await blogpost.get('/blogPost');

        dispatch({type: FETCH_POSTS, payload: response.data})
    }
};

export const fetchPost = (id) => {
    return async (dispatch) => {
        const response = await blogpost.get(`/blogPost/${id}`);

        dispatch({type: FETCH_POST, payload: response.data})
    }
};