import { createSlice } from "@reduxjs/toolkit";

export interface IinitialStateSearchFiles {
	searchValue: string;
}

const initialState: IinitialStateSearchFiles = {
	searchValue: "",
};

export const searchFilesSlice = createSlice({
	name: "searchFilesSlice",
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
	},
});

export const { setSearchValue } = searchFilesSlice.actions;

export const searchFilesReducer = searchFilesSlice.reducer;
