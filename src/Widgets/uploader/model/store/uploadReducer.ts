import { createSlice } from "@reduxjs/toolkit";

export interface IFileUpload {
	uploadId: string;
	name: string;
	progress: number;
	type: string;
	status: any;
}

export interface IinitialStateUploader {
	isVisible: boolean;
	files: IFileUpload[];
}

const initialState: IinitialStateUploader = {
	isVisible: false,
	files: [],
};

export const uploadSlice = createSlice({
	name: "upload",
	initialState,
	reducers: {
		showUploader(state) {
			state.isVisible = true;
		},
		hideUploader(state) {
			state.isVisible = false;
		},
		addUploadFile(state, action) {
			// console.log(action.payload);
			state.files = [...state.files, { ...action.payload }];
		},
		removeUploadFile(state, action) {
			state.files = [
				...state.files.filter((file) => file.uploadId != action.payload),
			];
		},
		changeUploadFile(state, action) {
			state.files = [
				...state.files.map((file) =>
					file.uploadId == action.payload.uploadId
						? { ...file, progress: action.payload.progress }
						: { ...file }
				),
			];
		},
		changeUploadStatus(state, action) {
			// console.log(action.payload, "action.payload.uploadId");
			state.files = [
				...state.files.map((file) =>
					file.uploadId == action.payload.uploadId
						? { ...file, status: action.payload.status }
						: {
								...file,
						  }
				),
			];
		},
	},
});

export const {
	showUploader,
	hideUploader,
	addUploadFile,
	removeUploadFile,
	changeUploadFile,
	changeUploadStatus,
} = uploadSlice.actions;

export const uploadReducer = uploadSlice.reducer;
