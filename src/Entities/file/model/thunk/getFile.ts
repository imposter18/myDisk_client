import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IGetFiles } from "../types/getFiles";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}

export const getFiles = createAsyncThunk<
	IGetFiles,
	string,
	{ rejectValue: AxiosError<IResponseError> }
>("file/getFile", async function (currentDir, { rejectWithValue }) {
	try {
		const res = await getFileHTTP(currentDir);
		return res.data as IGetFiles;
	} catch (e) {
		return rejectWithValue(e);
	}
});
