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

export const fetchPalette = dispatch => {

}