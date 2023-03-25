import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { deleteFileThunk } from "../thunk/deleteFileThunk";
import { InitialError } from "@/Entities/file/model/store/fileSlice";

export function deleteFileAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(deleteFileThunk.pending, (state) => {
		state.isLoagingDelete = true;
		state.deleteError = InitialError;
	});
	builder.addCase(deleteFileThunk.fulfilled, (state, action) => {
		state.isLoagingDelete = false;
		state.deleteError = InitialError;
		state.files = [
			...state.files.filter((file) => file._id != action.payload._id),
		];
	});
	builder.addCase(deleteFileThunk.rejected, (state, action) => {
		state.isLoagingDelete = false;
		if (action) {
			state.deleteError = action.payload?.response?.data;
		} else {
			state.deleteError.message = "Unexpected error";
		}
	});
}
