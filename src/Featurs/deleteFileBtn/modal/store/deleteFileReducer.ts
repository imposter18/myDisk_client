import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
	deletedFile: string;
	status: "success" | "rejected";
}

const initialState: IinitialState = {
	deletedFile: "",
	status: null,
};

export const deleteFileSlice = createSlice({
	name: "deleteFileSlice",
	initialState,
	reducers: {
		clearDeleteStore(state) {
			state = initialState;
		},
		deleteinProcess(state) {
			state.deletedFile = "";
			state.status = null;
		},

		setdeletedFileSuccess(state, action) {
			state.deletedFile = action.payload;
			state.status = "success";
		},
		setdeletedFileRejected(state, action) {
			state.deletedFile = action.payload;
			state.status = "rejected";
		},
	},
});

export const {
	clearDeleteStore,
	setdeletedFileSuccess,
	setdeletedFileRejected,
	deleteinProcess,
} = deleteFileSlice.actions;

export const deleteFileReducer = deleteFileSlice.reducer;
