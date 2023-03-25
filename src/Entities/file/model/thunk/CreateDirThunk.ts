import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { CreateDirHTTP } from "../../api/CreateDirHTTP";
import { IResponseErrorFile } from "../types/responsError";

interface ICreateDirProps {
	currentDir: string;
	name: string;
	type: string;
}
export const CreateDirThunk = createAsyncThunk<
	IFileResponse,
	ICreateDirProps,
	{ rejectValue: AxiosError<IResponseErrorFile> }
>(
	"file/createDir",
	async function ({ currentDir, name, type = "dir" }, { rejectWithValue }) {
		try {
			const res = await CreateDirHTTP(currentDir, name, type);
			return res.data as IFileResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
