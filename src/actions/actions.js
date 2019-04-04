//actions

//Sets the Palette color across every component with any change,
export const SET_PALETTE = "SET_PALETTE";
export const setPalette = (itemId,itemColor) =>({
    type: SET_PALETTE,
    itemId,
    itemColor
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

export const fetchPalette = dispatch => {

}