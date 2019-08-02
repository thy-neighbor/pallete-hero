//actions

export const apiPostPalette = (input) => (dispatch) =>{
    const url="http://colormind.io/api/";   
    console.log("INSIDE APIPOSTPALETTE!!");
    return fetch(url,{method:'POST', body:JSON.stringify(input)
    }).then((response)=>{
        //console.log(response);
        return response.json();
    }).then((res)=>{
        console.log("API got: ",res.result);
        dispatch(generatePalette(res.result));
    }) 
};

//loading state while palette is loading
export const SET_LOADING = "SET_LOADING";
export const setLoading = (loading) =>({
    type: SET_LOADING,
    loading
});

//Sets a Palette brick color 
export const SET_PALETTE = "SET_PALETTE";
export const setPalette = (itemId,itemColor) =>({
    type: SET_PALETTE,
    itemId,
    itemColor
});

//Sets the Palette color across every component and locks them all
export const SET_FULL_PALETTE = "SET_FULL_PALETTE";
export const setFullPalette = (rgb) =>({
    type: SET_FULL_PALETTE,
    rgb
});

//Sets edit state which either locks whole palette or doesnt
export const SET_EDIT_STATE = "SET_EDIT_STATE";
export const setEditState = (bool) =>({
    type: SET_EDIT_STATE,
    bool
});

//Sets the new palette that was just generated
export const GENERATE_PALETTE = "GENERATE_PALETTE";
export const generatePalette = (rgb) => ({
    type: GENERATE_PALETTE,
    rgb
});

//lock a specific palette brick
export const LOCK_PALETTE_BRICK = "LOCK_PALETTE_BRICK";
export const lockPaletteBrick = (itemId,isLocked) => ({
    type: LOCK_PALETTE_BRICK,
    itemId,
    isLocked
});

//switches the position of 2 palette bricks
export const SWAP_PALETTE_BRICK = "SWAP_PALETTE_BRICK";
export const swapPaletteBrick = (curr,target) => ({
    type: SWAP_PALETTE_BRICK,
    curr,
    target
});
