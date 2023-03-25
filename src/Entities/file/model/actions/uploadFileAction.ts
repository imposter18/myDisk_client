import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
	IinitialState,
	InitialErrorUpload,
} from "@/Entities/file/model/store/fileSlice";
import { uploadFileThunk } from "../thunk/uploadFileThunk";

export function uploadFileAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(uploadFileThunk.pending, (state) => {
		// state.isLoaging = true;
		state.uploadError = InitialErrorUpload;
	});
	builder.addCase(uploadFileThunk.fulfilled, (state, action) => {
		// state.isLoaging = false;
		state.uploadError = InitialErrorUpload;
		state.files = [...state.files, action.payload];
	});
	builder.addCase(uploadFileThunk.rejected, (state, action) => {
		// state.isLoaging = false;
		if (action) {
			state.uploadError = action.payload?.response?.data;
		} else {
			state.uploadError.message = "Unexpected error";
		}
	});
}
