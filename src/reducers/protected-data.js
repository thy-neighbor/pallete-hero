import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PALETTE_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_COMMUNITY_DATA_SUCCESS,
    UPDATE_PALETTE_DATA_SUCCESS,
    DELETE_PALETTE_DATA_SUCCESS,
    DUPLICATE_PALETTE_DATA_SUCCESS
} from '../actions/protected-data';

const initialState = {
    paletteData:'', //its really [] lol ... but for now :)
    data: '',
    comm:'',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PALETTE_DATA_SUCCESS) {
        console.log("FETCH_PALETTE_DATA_SUCCESS");
        return Object.assign({}, state, {
            paletteData: action.data,
            error: null
        });
    }else if (action.type == UPDATE_PALETTE_DATA_SUCCESS) {
        console.log("UPDATE_PALETTE_DATA_SUCCESS");
        
        return Object.assign({}, state, {
            paletteData: state.paletteData.map(item =>{
                if (item.id === action.id){
                    item.rgb = action.rgb;
                } 
                return item;
            }),    
            error: null
        });
    }else if (action.type == DELETE_PALETTE_DATA_SUCCESS) {
        console.log("DELETE_PALETTE_DATA_SUCCESS: \n", state.paletteData);
        
        return Object.assign({}, state, {
            paletteData: state.paletteData.filter(item => item.id !== action.item.id), 
            error: null
        });
    }else if (action.type == DUPLICATE_PALETTE_DATA_SUCCESS) {
        console.log("DUPLICATE_PALETTE_DATA_SUCCESS: \n", state.paletteData);
        const length=action.data.length;
        //something else is altering the state for this to be happening
        
        return Object.assign({}, state, {
            paletteData: [...state.paletteData, action.data[length-1]],
            error: null
        });
    }else if (action.type == FETCH_COMMUNITY_DATA_SUCCESS) {
        console.log("FETCH_COMMUNITY_DATA_SUCCESS");
        return Object.assign({}, state, {
            comm: action.data,
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