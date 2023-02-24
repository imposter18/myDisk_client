import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IFile } from "@/Shared/Types/IFile";
import { getDirStackHTTP } from "../../api/getDirStackHTTP";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}

export const getDirStackThunk = createAsyncThunk<
	IFileResponse[],
	string,
	{ rejectValue: AxiosError<IResponseError> }
>("file/dirStack", async function (dir, { rejectWithValue }) {
	try {
		const res = await getDirStackHTTP(dir);
		return res.data as IFileResponse[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
