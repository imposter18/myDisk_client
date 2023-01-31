import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	visible: false,
};

export const VisiblePopupSlice = createSlice({
	name: "VisiblePopup",
	initialState,
	reducers: {
		setVisible(state, action) {
			state.visible = action.payload;
		},
	},
});
export const { setVisible } = VisiblePopupSlice.actions;

export const VisiblePopupReducer = VisiblePopupSlice.reducer;
