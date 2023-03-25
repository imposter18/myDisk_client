import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Entities/file/model/store/fileSlice";
import { CreateDirThunk } from "../thunk/CreateDirThunk";
import { InitialError } from "../store/fileSlice";

export function createDirAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(CreateDirThunk.pending, (state) => {
		state.isLoadingCreateDir = true;
		state.createDirError = InitialError;
	});
	builder.addCase(CreateDirThunk.fulfilled, (state, action) => {
		state.isLoadingCreateDir = false;
		state.createDirError = InitialError;
		state.files = [...state.files, action.payload];
	});
	builder.addCase(CreateDirThunk.rejected, (state, action) => {
		state.isLoadingCreateDir = false;
		if (action) {
			state.createDirError = action.payload?.response?.data;
		} else {
			state.createDirError.message = "Unexpected error";
		}
	});
}
