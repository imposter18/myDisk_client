import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openedMenu: false,
};

export const toggleSlice = createSlice({
	name: "toggle",
	initialState,
	reducers: {
		toggleMenu: (state, action) => {
			state.openedMenu = action.payload;
		},
	},
});

export const { toggleMenu } = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
