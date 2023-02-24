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
	name: "file",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getStackAction(builder);
	},
});

// export const { setCurrentDir, pushToStack, popFromStack } = FileSlice.actions;

export const stackReducer = stackSlice.reducer;
