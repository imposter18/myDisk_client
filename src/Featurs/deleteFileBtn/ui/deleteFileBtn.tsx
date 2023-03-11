import { deleteFileThunk } from "@/Entities/file";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { Popconfirm } from "antd";
import React from "react";
import { setdeletedFileRejected, setdeletedFileSuccess } from "../modal";
import * as styles from "./deleteFileBtn.module.scss";
interface IProps {
	file: IFileResponse;
	className: string;
}

export const DeleteFileBtn = ({ file, className }: IProps) => {
	const dispatch = useAppDispatch();

	const deleteFileHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		// if (file.type === "dir")
		dispatch(deleteFileThunk(file)).then((res) => {
			if (res.meta.requestStatus === "fulfilled")
				dispatch(setdeletedFileSuccess(file.name));
			if (res.meta.requestStatus === "rejected")
				dispatch(setdeletedFileRejected(file.name));
		});
	};

	return (
		<>
			<button
				className={`${className} ${styles.btn}`}
				onClick={deleteFileHandler}
			>
				<i className="bi bi-trash2-fill"></i>
				Delete
			</button>
		</>
	);
};
