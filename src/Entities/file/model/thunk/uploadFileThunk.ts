import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFileHTTP } from "../../api/getFileHTTP";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { uploadFileHTTP } from "../../api/uploadFile";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import {
	addUploadFile,
	changeUploadFile,
	showUploader,
} from "@/Widgets/uploader/model/store/uploadReducer";

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
>(
	"file/uploadFile",
	async function ({ file, dirId }, { rejectWithValue, dispatch }) {
		try {
			const formData = new FormData();
			formData.append("file", file);
			if (dirId) {
				formData.append("parent", dirId);
			}

			const uploadFile = { name: file.name, progress: 0, id: Date.now() };
			dispatch(showUploader());
			dispatch(addUploadFile(uploadFile));

			const progressConfig = {
				onUploadProgress: (progressEvent: any) => {
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

// export const uploaderHalper = (file: any) => {
// 	const uploadFile = { name: file.name, progress: 0 };
// 	dispatch(showUploader());
// 	dispatch(addUploadFile(uploadFile));
// };
