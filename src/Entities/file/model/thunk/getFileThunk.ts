import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IGetFiles } from "../types/getFiles";
import { IResponseErrorFile } from "../types/responsError";

export interface IGetFileProps {
	search?: string;
	currentDir: string;
	sort: string;
	derection: string;
}

export const getFileThunk = createAsyncThunk<
	IGetFiles,
	IGetFileProps,
	{ rejectValue: AxiosError<IResponseErrorFile> }
>("file/getFile", async function (props, { rejectWithValue }) {
	try {
		const res = await getFileHTTP(props);
		return res.data as IGetFiles;
	} catch (e) {
		return rejectWithValue(e);
	}
});
