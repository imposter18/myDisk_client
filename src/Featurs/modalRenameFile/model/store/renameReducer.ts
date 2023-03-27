import { createSlice } from "@reduxjs/toolkit";

export interface IinitialState {
	renamingFile: string;
	status: "success" | "rejected";
}

const initialState: IinitialState = {
	renamingFile: "",
	status: null,
};

export const renameFileSlice = createSlice({
	name: "renameFileSlice",
	initialState,
	reducers: {
		clearRenameState(state) {
			state.renamingFile = "";
			state.status = null;
		},

		setRenameFileSuccess(state, action) {
			state.renamingFile = action.payload;
			state.status = "success";
		},
		setRenameFileRejected(state, action) {
			state.renamingFile = action.payload;
			state.status = "rejected";
		},
	},
});

export const { clearRenameState, setRenameFileSuccess, setRenameFileRejected } =
	renameFileSlice.actions;

export const renameFileReducer = renameFileSlice.reducer;
