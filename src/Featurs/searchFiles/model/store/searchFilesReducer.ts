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
		clearSearchStore(state) {
			state = initialState;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
	},
});

export const { setSearchValue, clearSearchStore } = searchFilesSlice.actions;

export const searchFilesReducer = searchFilesSlice.reducer;
