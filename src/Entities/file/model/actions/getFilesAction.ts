import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { getFileThunk } from "../thunk/getFileThunk";

export function getFileAction(builder: ActionReducerMapBuilder<IinitialState>) {
	builder.addCase(getFileThunk.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(getFileThunk.fulfilled, (state, action) => {
		state.isLoaging = false;
		state.error = null;
		state.files = action.payload.files;
		state.currentDir = action.payload.currentDir;
	});
	builder.addCase(getFileThunk.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = "Unexpected error";
		}
	});
}
