import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "@/Widgets/fileList/model/thunk/getFile";
import { CreateDir } from "@/Entities/popup/model/thunk/CreateDir";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { getFileAction } from "@/Widgets/fileList/model/actions/getFiles";
import { createDirAction } from "@/Entities/popup/model/actions/createDir";

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
		getFileAction(builder);
		createDirAction(builder);
	},
});

export const FileReducer = FileSlice.reducer;
