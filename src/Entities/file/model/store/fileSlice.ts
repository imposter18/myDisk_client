import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "@/Entities/file/model/thunk/getFile";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { getFileAction } from "@/Entities/file/model/actions/getFiles";
import { createDirAction } from "../actions/createDir";
import { uploadFileAction } from "../actions/uploadFileAction";
import { deleteFileAction } from "../actions/deleteFileAction";

export interface IUploadError {
	message: string;
	data?: {
		fileName: string;
		uploadId: string;
	};
}

export interface IinitialState {
	files: IFileResponse[];
	currentDir: IFileResponse;
	isLoaging: boolean;
	isLoagingDelete: boolean;
	isLoadingCreateDir: boolean;
	error: string | null | undefined;
	uploadError: IUploadError;
}

const initialState: IinitialState = {
	files: [],
	currentDir: null,
	isLoaging: false,
	isLoagingDelete: false,
	isLoadingCreateDir: false,
	error: null,
	uploadError: null,
};

export const FileSlice = createSlice({
	name: "file",
	initialState,
	reducers: {
		setCurrentDir(state, action) {
			state.currentDir = action.payload;
		},
	},
	extraReducers: (builder) => {
		getFileAction(builder);
		createDirAction(builder);
		uploadFileAction(builder);
		deleteFileAction(builder);
	},
});

export const { setCurrentDir } = FileSlice.actions;

export const FileReducer = FileSlice.reducer;
