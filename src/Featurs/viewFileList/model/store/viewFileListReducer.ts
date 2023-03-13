import { createSlice } from "@reduxjs/toolkit";

interface IViewFileInitialState {
	view: "List" | "Tiles" | "Large tiles" | string;
}
const viewFromLS = localStorage.getItem("view");

const initialState: IViewFileInitialState = {
	view: viewFromLS ? viewFromLS : "List",
};

const viewFileListSlice = createSlice({
	name: "viewFileList",
	initialState,
	reducers: {
		setView(state, action) {
			state.view = action.payload;
			localStorage.setItem("view", action.payload);
		},
	},
});

export const { setView } = viewFileListSlice.actions;

export const viewFileListReducer = viewFileListSlice.reducer;
