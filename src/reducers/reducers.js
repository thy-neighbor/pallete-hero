import {SET_PALETTE, GENERATE_PALETTE} from '../actions/actions'

/* var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"]
} */


const initialState = {
    palette:[
        [66,100,66],
        [0,0,150],
        [190,100,50],
        [30,16,30],
        [143,0,150]
        ]
};


export const paletteHeroReducer = (state=initialState, action) =>{
     if(action.type === SET_PALETTE){
        const rgb = state.palette.map((item, i) => {
            if (i === action.itemId) {
                console.log("INSIDE paletteHeroReducer, ITEM IS FOUND");
              return action.itemColor;
            } else {
                console.log("INSIDE paletteHeroReducer, ITEM IS NOTFOUND");
              return item;
            }
          });
        console.log("INSIDE paletteHeroReducer",rgb);
        console.log("vs",state.palette);
        return Object.assign({},state,{
            palette:rgb
        });
    }else if(action.type === GENERATE_PALETTE){
        console.log("YOUR IN REDUCER FOR GENERATE PALETTE");

        const rgb = state.palette.map((item, i) => {
            return([66,100,66]);
          });

        return Object.assign({},state,{
            palette:rgb
        });
    } 

    return state;
}

//YOU SHOULD CONNECT EVERYTHING FIRST WITH FAKE DATA THEN MAKE THE API WOORK