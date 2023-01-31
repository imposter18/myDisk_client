import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { CreateDirHTTP } from "../../api/CreateDirHTTP";

interface IResponseError {
	errors: Array<string> | [];
	message: string;
}
interface ICreateDirProps {
	currentDir: string;
	name: string;
	type: string;
}
export const CreateDir = createAsyncThunk<
	IFileResponse,
	ICreateDirProps,
	{ rejectValue: AxiosError<IResponseError> }
>(
	"file/createDir",
	async function ({ currentDir, name, type }, { rejectWithValue }) {
		try {
			const res = await CreateDirHTTP(currentDir, name, type);
			return res.data as IFileResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
