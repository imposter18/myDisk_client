import { createSlice } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { getFileAction } from "@/Entities/file/model/actions/getFilesAction";
import { createDirAction } from "../actions/createDirAction";
import { uploadFileAction } from "../actions/uploadFileAction";
import { deleteFileAction } from "../actions/deleteFileAction";
import { renameFileAction } from "../actions/renameFileAction";
import { IResponseErrorFile } from "../types/responsError";
import { IResponseErrorFileUpload } from "../types/IResponseErrorFileUpload";

export interface IinitialState {
	files: IFileResponse[];
	currentDir: IFileResponse;
	isLoaging: boolean;
	isLoagingDelete: boolean;
	isLoadingCreateDir: boolean;
	isLoadingRename: boolean;
	error: string | null | undefined;
	uploadError: IResponseErrorFileUpload;
	renameError: IResponseErrorFile;
	createDirError: IResponseErrorFile;
	deleteError: IResponseErrorFile;
}
export const InitialError: IResponseErrorFile = {
	message: "",
	error: [],
};
export const InitialErrorUpload: IResponseErrorFileUpload = {
	message: "",
	error: [],
	data: {
		fileName: "",
		uploadId: "",
	},
};

const initialState: IinitialState = {
	files: [],
	currentDir: null,
	isLoaging: false,
	isLoagingDelete: false,
	isLoadingCreateDir: false,
	isLoadingRename: false,
	error: null,
	uploadError: InitialErrorUpload,
	renameError: InitialError,
	createDirError: InitialError,
	deleteError: InitialError,
};

export const FileSlice = createSlice({
	name: "file",
	initialState,
	reducers: {
		setCurrentDir(state, action) {
			state.currentDir = action.payload;
		},
		clearFileStore(state) {
			state = initialState;
		},
	},
	extraReducers: (builder) => {
		getFileAction(builder);
		createDirAction(builder);
		uploadFileAction(builder);
		deleteFileAction(builder);
		renameFileAction(builder);
	},
});

export const { setCurrentDir, clearFileStore } = FileSlice.actions;

export const FileReducer = FileSlice.reducer;
