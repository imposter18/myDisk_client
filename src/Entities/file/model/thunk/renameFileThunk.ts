import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { renameFileHTTP } from "../../api/renameFileHTTP";
import { IResponseErrorFile } from "../types/responsError";

interface IRenameFileProps {
	newName: string;
	id: string;
}

export const renameFileThunk = createAsyncThunk<
	IFileResponse,
	IRenameFileProps,
	{ rejectValue: AxiosError<IResponseErrorFile> }
>("file/renameFile", async function ({ newName, id }, { rejectWithValue }) {
	try {
		const res = await renameFileHTTP(newName, id);
		return res.data as IFileResponse;
	} catch (e) {
		return rejectWithValue(e);
	}
});
