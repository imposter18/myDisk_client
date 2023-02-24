import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "../state/stackSlice";
import { getDirStackThunk } from "../thunk/getDirStack";

export function getStackAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(getDirStackThunk.pending, (state) => {
		state.isLoading = true;
		state.error = null;
	});
	builder.addCase(getDirStackThunk.fulfilled, (state, action) => {
		state.isLoading = false;
		state.error = null;
		state.stack = action.payload;
	});
	builder.addCase(getDirStackThunk.rejected, (state, action) => {
		state.isLoading = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
