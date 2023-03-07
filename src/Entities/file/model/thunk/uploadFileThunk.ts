import { AxiosError, AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { uploadFileHTTP } from "../../api/uploadFile";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { uuid } from "uuidv4";
import {
	addUploadFile,
	changeUploadFile,
	showUploader,
} from "@/Widgets/uploader/model/store/uploadReducer";

interface IResponseError {
	errors: Array<string> | [];
	message: string;
	// message: {
	// 	message: string;
	// 	data: string;
	// };
}
interface IUploadProps {
	file: File;
	dirId: string;
}
interface IErrr {
	response: AxiosResponse;
}

export const uploadFileThunk = createAsyncThunk<
	IFileResponse,
	IUploadProps,
	{ rejectValue: AxiosError<IResponseError> }
>(
	"file/uploadFile",
	async function ({ file, dirId }, { rejectWithValue, dispatch }) {
		try {
			const uploadId = Math.random() * 100;
			const formData = new FormData();
			formData.append("file", file);
			formData.append("fileName", file.name);
			formData.append("uploadId", `${uploadId}`);

			if (dirId) {
				formData.append("parent", dirId);
			}
			const type = file.name.split(".").pop();
			console.log(formData.get("file"), "formdata");
			const uploadFile = {
				name: file.name,
				progress: 0,
				uploadId: `${uploadId}`,
				type,
				status: "active",
			};
			dispatch(showUploader());
			dispatch(addUploadFile(uploadFile));

			const progressConfig = {
				onUploadProgress: (progressEvent: any) => {
					console.log(progressEvent);
					let progress = Math.round(
						(progressEvent.loaded / progressEvent.total) * 100
					);
					if (progress) {
						uploadFile.progress = progress;
						dispatch(changeUploadFile(uploadFile));
					}
				},
			};
			const res = await uploadFileHTTP(formData, progressConfig);

			return res.data as IFileResponse;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);
