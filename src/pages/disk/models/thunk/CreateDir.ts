import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFileResponse } from "../types/IFileResponse";
import { CreateDirHTTP } from "../../api";

interface IResponseError {
	errprs: Array<string> | [];
	message: string;
}
interface ICreateDirProps {
	currentDir: string;
	name: string;
	type: string;
}
export const CreateDir = createAsyncThunk<
	any,
	ICreateDirProps,
	{ rejectValue: AxiosError<IResponseError> }
>(
	"file/createDir",
	async function ({ currentDir, name, type }, { rejectWithValue }) {
		try {
			const res = await CreateDirHTTP(currentDir, name, type);
			return res.data as any;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
