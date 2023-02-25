import { deleteFile } from "@/Entities/file";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import React from "react";
import * as styles from "./deleteFileBtn.module.scss";
interface IProps {
	file: IFileResponse;
	className: string;
}

export const DeleteFileBtn = ({ file, className }: IProps) => {
	const dispatch = useAppDispatch();

	const deleteFileHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		dispatch(deleteFile(file));
	};

	return (
		<button
			className={`${className} ${styles.btn}`}
			onClick={deleteFileHandler}
		>
			<i className="bi bi-trash2-fill"></i>
			Delete
		</button>
	);
};
