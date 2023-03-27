import { createSlice } from "@reduxjs/toolkit";

export interface IinitialStateCreateDir {
	isVisibleNot: boolean;
	folderName: string;
}

const initialState: IinitialStateCreateDir = {
	isVisibleNot: false,
	folderName: "",
};

export const createDirSlice = createSlice({
	name: "CreateDirSlice",
	initialState,
	reducers: {
		clearCreateDirSrore(state) {
			state = initialState;
		},

		setVisibleNotCreateDir(state, action) {
			state.isVisibleNot = true;
			state.folderName = action.payload;
		},
	},
});

export const { setVisibleNotCreateDir, clearCreateDirSrore } =
	createDirSlice.actions;

export const createDirReducer = createDirSlice.reducer;
