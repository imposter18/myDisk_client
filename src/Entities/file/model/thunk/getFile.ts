import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IGetFiles } from "../types/getFiles";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}
export interface IGetFileProps {
	search?: string;
	currentDir: string;
	sort: string;
	derection: string;
}

export const getFiles = createAsyncThunk<
	IGetFiles,
	IGetFileProps,
	{ rejectValue: AxiosError<IResponseError> }
>("file/getFile", async function (props, { rejectWithValue }) {
	try {
		const res = await getFileHTTP(props);
		return res.data as IGetFiles;
	} catch (e) {
		return rejectWithValue(e);
	}
});
