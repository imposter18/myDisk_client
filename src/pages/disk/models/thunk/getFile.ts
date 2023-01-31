import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api";
import { IFileResponse } from "../types/IFileResponse";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}

export const getFiles = createAsyncThunk<
	IFileResponse[],
	string,
	{ rejectValue: AxiosError<IResponseError> }
>("file/getFile", async function (currentDir, { rejectWithValue }) {
	try {
		const res = await getFileHTTP(currentDir);
		console.log(res, "res");
		return res.data as IFileResponse[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
