import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { uploadFileHTTP } from "../../api/uploadFile";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}
interface IUploadProps {
	file: File;
	dirId: string;
}

export const uploadFileThunk = createAsyncThunk<
	IFileResponse,
	IUploadProps,
	{ rejectValue: AxiosError<IResponseError> }
>("file/uploadFile", async function ({ file, dirId }, { rejectWithValue }) {
	try {
		const formData = new FormData();
		formData.append("file", file);
		if (dirId) {
			formData.append("parent", dirId);
		}
		console.log(formData.get("file"), "formData");
		const res = await uploadFileHTTP(formData);
		return res.data as IFileResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
