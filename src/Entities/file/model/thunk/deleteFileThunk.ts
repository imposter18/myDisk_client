import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IFile } from "@/Shared/Types/IFile";
import { deletetFileHTTP } from "../../api/deleteFile";
import { deleteinProcess } from "@/Featurs/deleteFileBtn";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}

export const deleteFileThunk = createAsyncThunk<
	IFileResponse,
	IFileResponse,
	{ rejectValue: AxiosError<IResponseError> }
>("file/deleteFile", async function (file, { rejectWithValue, dispatch }) {
	try {
		const res = await deletetFileHTTP(file);
		dispatch(deleteinProcess());
		return res.data as IFileResponse;
	} catch (e) {
		dispatch(deleteinProcess());
		return rejectWithValue(e);
	}
});
