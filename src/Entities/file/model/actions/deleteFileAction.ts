import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { deleteFileThunk } from "../thunk/deleteFileThunk";
import { file } from "../../ui/file.module.scss";

export function deleteFileAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(deleteFileThunk.pending, (state) => {
		state.isLoagingDelete = true;
		state.error = null;
	});
	builder.addCase(deleteFileThunk.fulfilled, (state, action) => {
		state.isLoagingDelete = false;
		state.error = null;
		state.files = [
			...state.files.filter((file) => file._id != action.payload._id),
		];
	});
	builder.addCase(deleteFileThunk.rejected, (state, action) => {
		state.isLoagingDelete = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
