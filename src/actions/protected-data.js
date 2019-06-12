import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PALETTE_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchPaletteDataSuccess = data => ({
    type: FETCH_PALETTE_DATA_SUCCESS,
    data
});

export const FETCH_COMMUNITY_DATA_SUCCESS = 'FETCH_COMMUNITY_DATA_SUCCESS';
export const fetchCommunityDataSuccess = data => ({
    type: FETCH_COMMUNITY_DATA_SUCCESS,
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


export const fetchPaletteData = () => (dispatch, getState) =>{
    console.log(`Actions>Protected-Data.js fetchPaletteData : Here`);
    
    const currentUser = getState().auth.currentUser.username;
    return fetch(`${API_BASE_URL}/public?q=`+currentUser, {
        method: 'GET',
        headers:{
            'Accept':'*/*',
            'cache-control': 'no-cache'
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => {dispatch(fetchPaletteDataSuccess(data))})
    .catch(err => {
        dispatch(fetchProtectedDataError(err));
    });
};

export const deletePaletteData = (id) => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/public`,{
        method: 'DELETE',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({
            paletteId:id,
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

export const updatePaletteData = (id,rgb) => (dispatch, getState) => {
    return fetch(`${API_BASE_URL}/public`,{
        method: 'PUT',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({
            paletteId:id,
            paletteRgb:rgb
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

//NOW WE GOTTA WORK ON THIS MOTHAFUCKAA!!!!!!!!
export const fetchCommunityData = () => (dispatch) => {
    console.log("INSIDE FETCHCOMMUNITYDATA");
    return fetch(`${API_BASE_URL}/public/community`, {
        method: 'GET',
        headers:{
            'Accept':'*/*',
            'cache-control': 'no-cache'
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({data}) => {dispatch(fetchCommunityDataSuccess(data))})
    .catch(err => {
        dispatch(fetchProtectedDataError(err));
    });
};
