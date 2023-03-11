import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

import { getUserSpace } from "../../api/getUserSpace";
import { IUser } from "@/Shared/Types/IUser";

export const getUserSpaceThunk = createAsyncThunk<
	IUser,
	null,
	{ rejectValue: AxiosError<string> }
>("user/getUserSpace", async function ({}, { rejectWithValue }) {
	try {
		const res = await getUserSpace();
		return res.data as IUser;
	} catch (e) {
		return rejectWithValue(e);
	}
});
