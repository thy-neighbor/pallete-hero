import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) =>{
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
        dispatch(fetchProtectedDataError(err));
    });
};

//THIS METHOD THROWS AN ERROR SAYING 404 NOT FOUND
export const postPaletteData = (title,newPalette) => (dispatch, getState) => {
    console.log(`Actions>Protected-Data.js post :`,title,newPalette);
    const currentUser = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/public`,{
        method: 'POST',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({
            user:currentUser,
            rgb:newPalette,
            name:title
        })
   
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        //change validation error to submission error
        
        const {reason, message, location} = err;
        if(reason === 'ValidationError'){
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    });
   
};


//NOW WE GOTTA WORK ON THIS MOTHAFUCKER!!!!!!!!
export const fetchPaletteData = () => (dispatch, getState) =>{
    const currentUser = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
        dispatch(fetchProtectedDataError(err));
    });
};
