import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "../thunk/getFile";
import { CreateDir } from "../thunk/CreateDir";
import { IFileResponse } from "../types/IFileResponse";

export interface IinitialState {
	files: IFileResponse[];
	currentDir: string | null;
	isLoaging: boolean;
	error: string | null | undefined;
}

const initialState: IinitialState = {
	files: [],
	currentDir: null,
	isLoaging: false,
	error: null,
};

export const FileSlice = createSlice({
	name: "file",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFiles.pending, (state) => {
			state.isLoaging = true;
			state.error = null;
		});
		builder.addCase(getFiles.fulfilled, (state, action) => {
			state.isLoaging = false;
			state.files = action.payload;
		});
		builder.addCase(getFiles.rejected, (state, action) => {
			state.isLoaging = false;
			if (action) {
				state.error = action.payload?.response?.data?.message;
			} else {
				state.error = action.payload.message;
			}
		});
		// CreateDir
		builder.addCase(CreateDir.pending, (state) => {
			// state.isLoaging = true;
			// state.error = null;
		});
		builder.addCase(CreateDir.fulfilled, (state, action) => {
			state.files = [...state.files, action.payload];
		});
		builder.addCase(CreateDir.rejected, (state, action) => {
			state.isLoaging = false;
			if (action) {
				state.error = action.payload?.response?.data?.message;
			} else {
				state.error = action.payload.message;
			}
		});
	},
});

export const FileReducer = FileSlice.reducer;
