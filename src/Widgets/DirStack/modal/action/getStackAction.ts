import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "../state/stackSlice";
import { getDirStackThunk } from "../thunk/getDirStack";
import { InitialError } from "../state/stackSlice";

export function getStackAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(getDirStackThunk.pending, (state) => {
		state.isLoading = true;
		state.error = InitialError;
	});
	builder.addCase(getDirStackThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = InitialError;
		state.stack = action.payload;
	});
	builder.addCase(getDirStackThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response?.data;
		} else {
			state.error.message = "Unexpected error";
		}
	});
}
