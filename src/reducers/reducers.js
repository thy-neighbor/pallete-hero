import {SET_PALETTE, SET_FULL_PALETTE, GENERATE_PALETTE, LOCK_PALETTE_BRICK, SET_EDIT_STATE, SWAP_PALETTE_BRICK} from '../actions/actions'

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
var palette;    //file scope, used to recieve palette from colormind.api
        

http.onreadystatechange = function() {
    console.log(http.readyState,http.status);
    if(http.readyState === 4 && http.status === 200) {
        console.log("HTTP>ONREADYSTATECHANGE");
        palette = JSON.parse(http.responseText).result;
    }
}
http.open("POST", url, false);
http.send(JSON.stringify(data));
console.log("PALETTTEEE!!",palette);

const initialState = {
    palette,
    myInput:["N","N","N","N","N"],   //this works as lock pattern since the api takes n as unknowns, if not n the value doesnt change
    edit:false
};

//my reducers are gonna just post to the endpoints to save things to the data base
export default function paletteHeroReducer(state=initialState, action) {
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
        
        if(!state.myInput.includes("N")){   //if the array is full there is no need to send it to the api
            return state;
        }

        var newData = {
            model : "default",
            input : state.myInput
        }

        http.open("POST", url, true);//originally worked with 'false' async option
        http.send(JSON.stringify(newData));

        return Object.assign({},state,{
            palette
        });

    }else if(action.type === SET_FULL_PALETTE){
        console.log("YOUR IN REDUCER FOR SET FULL PALETTE");
        return Object.assign({},state,{
            palette:action.rgb,
            myInput:action.rgb, //i need it full so they do change immediately
            edit:true
        });
    }else if(action.type === SET_EDIT_STATE){
        console.log("YOUR IN REDUCER FOR SET EDIT STATE");
        return Object.assign({},state,{
            edit:action.bool
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

    }else if(action.type === SWAP_PALETTE_BRICK){
        console.log("YOUR IN REDUCER FOR SWAP PALETTE BRICK");
        //time to swap 
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
        
        
        console.log("NEW PALETTE AFTER SWAP: ",state.palette, newRGB);
       
        return Object.assign({},state,{
            palette:newRGB,
            myInput:newInput
        });
    }

    return state;
}
