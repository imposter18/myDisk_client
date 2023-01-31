import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

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
		return res.data as IFileResponse[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
