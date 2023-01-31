import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "../thunk/getFile";
import { IFileResponse } from "../types/IFileResponse";

export interface IinitialState {
	files: IFileResponse[];
	carrentDir: string;
	isLoaging: boolean;
	error: string | null | undefined;
}

const initialState: IinitialState = {
	files: [],
	carrentDir: "",
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
	},
});

export const FileReducer = FileSlice.reducer;
