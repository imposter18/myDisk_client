import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { uploadFileThunk } from "../thunk/uploadFileThunk";

export function uploadFileAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(uploadFileThunk.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(uploadFileThunk.fulfilled, (state, action) => {
		state.isLoaging = false;
		state.error = null;
		state.files = [...state.files, action.payload];
	});
	builder.addCase(uploadFileThunk.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
