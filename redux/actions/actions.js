import * as types from './types';


export const fetch = (payload) => {
    type: types.FETCH_START
}

export const fetchSuccess = (payload) => {
    type: types.FETCH_SUCCESS,
    payload
}
export const fetchFailure = (payload) => {
    type: types.FETCH_FAILURE,
    payload
}