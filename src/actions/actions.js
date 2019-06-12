//actions

//Sets the Palette color across every component with any change,
export const SET_PALETTE = "SET_PALETTE";
export const setPalette = (itemId,itemColor) =>({
    type: SET_PALETTE,
    itemId,
    itemColor
});

//Sets the Palette color across every component with any change,
export const SET_FULL_PALETTE = "SET_FULL_PALETTE";
export const setFullPalette = (rgb) =>({
    type: SET_FULL_PALETTE,
    rgb
});

export const SET_EDIT_STATE = "SET_EDIT_STATE";
export const setEditState = (bool) =>({
    type: SET_EDIT_STATE,
    bool
});

//Generates a palette using the colormind api
export const GENERATE_PALETTE = "GENERATE_PALETTE";
export const generatePalette = () => ({
    type: GENERATE_PALETTE,
});

export const LOCK_PALETTE_BRICK = "LOCK_PALETTE_BRICK";
export const lockPaletteBrick = (itemId,isLocked) => ({
    type: LOCK_PALETTE_BRICK,
    itemId,
    isLocked
});

export const SWAP_PALETTE_BRICK = "SWAP_PALETTE_BRICK";
export const swapPaletteBrick = (curr,target) => ({
    type: SWAP_PALETTE_BRICK,
    curr,
    target
});
