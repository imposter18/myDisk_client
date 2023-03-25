import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { renameFileThunk } from "../thunk/renameFileThunk";
import { InitialError } from "../store/fileSlice";

export function renameFileAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(renameFileThunk.pending, (state) => {
		state.isLoadingRename = true;
		state.renameError = InitialError;
	});
	builder.addCase(renameFileThunk.fulfilled, (state, action) => {
		state.isLoadingRename = false;
		state.renameError = InitialError;
		state.files = [
			...state.files.map((item) => {
				if (item._id === action.payload._id) {
					item.name = action.payload.name;
					return item;
				} else return item;
			}),
		];
	});
	builder.addCase(renameFileThunk.rejected, (state, action) => {
		state.isLoadingRename = false;
		if (action) {
			state.renameError = action.payload?.response?.data;
		} else {
			state.renameError.message = "Unexpected error";
		}
	});
}
