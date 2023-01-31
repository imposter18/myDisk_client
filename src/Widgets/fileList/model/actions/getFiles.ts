import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Shared/store/reducers/fileSlice";
import { getFiles } from "../thunk/getFile";

export function getFileAction(builder: ActionReducerMapBuilder<IinitialState>) {
	builder.addCase(getFiles.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(getFiles.fulfilled, (state, action) => {
		state.isLoaging = false;
		state.error = null;
		state.files = action.payload;
	});
	builder.addCase(getFiles.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
