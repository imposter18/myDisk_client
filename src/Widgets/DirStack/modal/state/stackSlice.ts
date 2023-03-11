import { createSlice } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { getStackAction } from "../action/getStackAction";

export interface IinitialState {
	stack: IFileResponse[];
	isLoading: boolean;
	error: string | null | undefined;
}

const initialState: IinitialState = {
	stack: [],
	isLoading: false,
	error: null,
};

export const stackSlice = createSlice({
	name: "dirStack",
	initialState,
	reducers: {
		removeStack(state) {
			state.stack = [];
		},
	},
	extraReducers: (builder) => {
		getStackAction(builder);
	},
});

export const { removeStack } = stackSlice.actions;

export const stackReducer = stackSlice.reducer;
