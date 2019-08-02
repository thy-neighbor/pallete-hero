import {SET_PALETTE, SET_FULL_PALETTE, GENERATE_PALETTE, LOCK_PALETTE_BRICK, SET_EDIT_STATE, SWAP_PALETTE_BRICK, SET_LOADING} from '../actions/actions'

/*API Access - http://colormind.io/api-access/*/
const url="http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N","N","N","N","N"]
}

var palette;    //file scope, used to recieve palette from colormind.api

const initialState = {
    palette,
    myInput:["N","N","N","N","N"],   //this works as lock pattern since the api takes n as unknowns, if not n the value doesnt change
    edit:false,
    loading:true
};

export default function paletteHeroReducer(state=initialState, action) {
     if(action.type === SET_PALETTE){
        const rgb = state.palette.map((item, i) => {
            if (i === action.itemId) {
              return action.itemColor;
            } else {
              return item;
            }
          });

        return Object.assign({},state,{
            palette:rgb
        });
    }else if(action.type === GENERATE_PALETTE){

        return Object.assign({},state,{
            palette:action.rgb,
            loading:false
        });

    }else if(action.type === SET_FULL_PALETTE){
        return Object.assign({},state,{
            palette:action.rgb,
            myInput:action.rgb, //i need it full so they do change immediately
            edit:true,
            loading:false
        });
    }else if(action.type === SET_EDIT_STATE){
        return Object.assign({},state,{
            edit:action.bool
        });
    }else if(action.type === LOCK_PALETTE_BRICK){
        const newLockPat = state.myInput.map((item, i) => {
            if (i === action.itemId) {
                if(action.isLocked===true){
                    return state.palette[i];
                }else{
                    return "N";
                }     
            } else {
              return item;
            }
          });
        
        return Object.assign({},state,{
            myInput:newLockPat
        });

    }else if(action.type === SWAP_PALETTE_BRICK){
        let curr=state.palette[action.curr];
        let tar=state.palette[action.target];
        let newRGB=state.palette.map((item,i)=>{
            if(i===action.curr){
                return(tar);
            }else if(i===action.target){
                return(curr);
            }else{
                return item;
            }
        });

        curr=state.myInput[action.curr];
        tar=state.myInput[action.target];
        let newInput=state.myInput.map((item,i)=>{
            if(i===action.curr){
                return(tar);
            }else if(i===action.target){
                return(curr);
            }else{
                return item;
            }
        });
       
        return Object.assign({},state,{
            palette:newRGB,
            myInput:newInput
        });
    }else if(action.type === SET_LOADING){
        return Object.assign({},state,{
            loading:action.loading
        });
    }

    return state;
}
