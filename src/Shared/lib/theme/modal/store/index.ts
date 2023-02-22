import { createSlice } from "@reduxjs/toolkit";
import { getTheme } from "../../lib/getTheme";

const initialState = {
	theme: getTheme(),
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		updateTheme(state, action) {
			document.documentElement.dataset.theme = action.payload;
			localStorage.setItem("theme", action.payload);
			state.theme = action.payload;
			// console.log(state);
			// console.log(action);
		},
	},
});
export const themeReducer = themeSlice.reducer;
export const { updateTheme } = themeSlice.actions;
