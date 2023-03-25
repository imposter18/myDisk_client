import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { IFile } from "@/Shared/Types/IFile";
import { getDirStackHTTP } from "../../api/getDirStackHTTP";
import { IResponseErrorFile } from "@/Entities/file/model/types/responsError";

export const getDirStackThunk = createAsyncThunk<
	IFileResponse[],
	string,
	{ rejectValue: AxiosError<IResponseErrorFile> }
>("file/dirStack", async function (dir, { rejectWithValue }) {
	try {
		const res = await getDirStackHTTP(dir);
		return res.data as IFileResponse[];
	} catch (e) {
		return rejectWithValue(e);
	}
});
