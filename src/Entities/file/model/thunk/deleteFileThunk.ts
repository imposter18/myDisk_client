import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IFile } from "@/Shared/Types/IFile";
import { deletetFileHTTP } from "../../api/deleteFile";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}
interface IReaponse {
	message: string;
}

export const deleteFile = createAsyncThunk<
	IFileResponse,
	IFileResponse,
	{ rejectValue: AxiosError<IResponseError> }
>("file/deleteFile", async function (file, { rejectWithValue }) {
	try {
		const res = await deletetFileHTTP(file);
		console.log(res.data, "res.data");
		return res.data as IFileResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
