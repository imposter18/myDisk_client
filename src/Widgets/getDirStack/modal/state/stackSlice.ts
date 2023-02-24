import { createSlice } from "@reduxjs/toolkit";

import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

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

export const FileSlice = createSlice({
	name: "file",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

// export const { setCurrentDir, pushToStack, popFromStack } = FileSlice.actions;

export const FileReducer = FileSlice.reducer;
