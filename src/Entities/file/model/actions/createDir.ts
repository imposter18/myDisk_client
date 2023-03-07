import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { CreateDir } from "../thunk/CreateDir";

export function createDirAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(CreateDir.pending, (state) => {
		state.isLoadingCreateDir = true;
		state.error = null;
	});
	builder.addCase(CreateDir.fulfilled, (state, action) => {
		state.isLoadingCreateDir = false;
		state.error = null;
		state.files = [...state.files, action.payload];
	});
	builder.addCase(CreateDir.rejected, (state, action) => {
		state.isLoadingCreateDir = false;
		if (action) {
			state.error = action.payload?.response?.data;
		} else {
			state.error = action.payload.message;
		}
	});
}
