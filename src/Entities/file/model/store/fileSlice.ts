import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "@/Entities/file/model/thunk/getFile";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { getFileAction } from "@/Entities/file/model/actions/getFiles";
import { createDirAction } from "../actions/createDir";
import { uploadFileAction } from "../actions/uploadFileAction";
import { deleteFileAction } from "../actions/deleteFileAction";

export interface IinitialState {
	files: IFileResponse[];
	currentDir: IFileResponse;
	diskStack: string[];
	isLoaging: boolean;
	isLoagingDelete: boolean;
	error: string | null | undefined;
}

const initialState: IinitialState = {
	files: [],
	currentDir: null,
	diskStack: [],
	isLoaging: false,
	isLoagingDelete: false,
	error: null,
};

export const FileSlice = createSlice({
	name: "file",
	initialState,
	reducers: {
		setCurrentDir(state, action) {
			state.currentDir = action.payload;
		},
		pushToStack(state, action) {
			console.log(action, "action");
			state.diskStack = [...state.diskStack, action.payload];
			// state.diskStack.push(action.payload);
			console.log(state.diskStack, "state.diskStack");
		},
		popFromStack(state) {
			// console.log(action, "action");
			state.diskStack = state.diskStack.slice(0, state.diskStack.length - 1);
			// state.diskStack.push(action.payload);
			console.log(state.diskStack, "state.diskStack");
		},
	},
	extraReducers: (builder) => {
		getFileAction(builder);
		createDirAction(builder);
		uploadFileAction(builder);
		deleteFileAction(builder);
	},
});

export const { setCurrentDir, pushToStack, popFromStack } = FileSlice.actions;

export const FileReducer = FileSlice.reducer;
