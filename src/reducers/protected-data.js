import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PALETTE_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    paletteData: '',
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PALETTE_DATA_SUCCESS) {
        console.log("FETCH_PALETTE_DATA_SUCCESS");
        return Object.assign({}, state, {
            paletteData: action.data,
            error: null
        });
    }else if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    }else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;

}