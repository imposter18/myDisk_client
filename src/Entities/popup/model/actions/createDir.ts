import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IinitialState } from "@/Shared/store/reducers/fileSlice";
import { CreateDir } from "../thunk/CreateDir";

export function createDirAction(
	builder: ActionReducerMapBuilder<IinitialState>
) {
	builder.addCase(CreateDir.pending, (state) => {
		state.isLoaging = true;
		state.error = null;
	});
	builder.addCase(CreateDir.fulfilled, (state, action) => {
		state.isLoaging = false;
		state.error = null;
		state.files = [...state.files, action.payload];
	});
	builder.addCase(CreateDir.rejected, (state, action) => {
		state.isLoaging = false;
		if (action) {
			state.error = action.payload?.response?.data?.message;
		} else {
			state.error = action.payload.message;
		}
	});
}
