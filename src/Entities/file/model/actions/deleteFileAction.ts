import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { deleteFile } from "../thunk/deleteFileThunk";
import { file } from "../../ui/file.module.scss";

export function deleteFileAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(deleteFile.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(deleteFile.fulfilled, (state, action) => {
		state.isLoaging = false;
		state.error = null;
		state.files = [
			...state.files.filter((file) => file._id != action.payload._id),
		];
	});
	builder.addCase(deleteFile.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
