import { createSlice } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { getStackAction } from "../action/getStackAction";
import { IResponseErrorFile } from "@/Entities/file/model/types/responsError";

export const InitialError: IResponseErrorFile = {
	message: "",
	error: [],
};

export interface IinitialState {
	stack: IFileResponse[];
	isLoading: boolean;
	error: IResponseErrorFile;
}

const initialState: IinitialState = {
	stack: [],
	isLoading: false,
	error: InitialError,
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
