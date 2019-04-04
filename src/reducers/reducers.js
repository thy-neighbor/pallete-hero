import {SET_PALETTE, GENERATE_PALETTE, LOCK_PALETTE_BRICK} from '../actions/actions'

/* var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [[44,43,44],[90,83,82],"N","N","N"]
} */

/*API Access - http://colormind.io/api-access/*/
const url="http://colormind.io/api/";
var data = {
	model : "default",
	input : ["N","N","N","N","N"]
}

var http = new XMLHttpRequest();
var palette;
        

http.onreadystatechange = function() {
    console.log(http.readyState,http.status);
    if(http.readyState == 4 && http.status == 200) {
        console.log("HTTP>ONREADYSTATECHANGE");
        palette = JSON.parse(http.responseText).result;
    }
}
http.open("POST", url, false);
http.send(JSON.stringify(data));
//console.log("PALETTTEEE!!",palette);

const initialState = {
    palette,
    myInput:["N","N","N","N","N"]
};

//my reducers are gonna just post to the endpoints to save things to the data base
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
    }else if(action.type === LOCK_PALETTE_BRICK){
        const newLockPat = state.myInput.map((item, i) => {
            if (i === action.itemId) {
                console.log("INSIDE LOCK_PALETTE_BRICK, ITEM IS FOUND");
                if(action.isLocked===true){
                    return state.palette[i];
                }else{
                    return "N";
                }     
            } else {
                console.log("INSIDE LOCK_PALETTE_BRICK, ITEM IS NOTFOUND");
              return item;
            }
          });
        console.log("INSIDE LOCK_PALETTE_BRICK",newLockPat);
        
        return Object.assign({},state,{
            myInput:newLockPat
        });

    } 

    return state;
}

//YOU SHOULD CONNECT EVERYTHING FIRST WITH FAKE DATA THEN MAKE THE API WOORK