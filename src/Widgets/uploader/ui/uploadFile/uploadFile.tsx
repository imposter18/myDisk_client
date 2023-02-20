import React from "react";
import * as styles from "./uploadFile.module.scss";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { DiskPage } from "@/Pages/disk";
import { removeUploadFile } from "../../model/store/uploadReducer";

interface props {
	file: {
		id: string;
		name: string;
		progress: number;
	};
}

export const UploadFile = ({ file }: props) => {
	const dispatch = useAppDispatch();
	const removeUploadFileHandler = () => {
		dispatch(removeUploadFile(file.id));
	};
	return (
		<div className={styles.uploadFile}>
			<div className={styles.header}>
				<div className={styles.fileName}>{file.name}</div>
				<button onClick={removeUploadFileHandler} className={styles.btnRemove}>
					X
				</button>
			</div>
			<div className={styles.progressBar}>
				<div
					className={styles.uploadBar}
					style={{ width: file.progress + "%" }}
				></div>
				<div className={styles.progress}>{file.progress}%</div>
			</div>
		</div>
	);
};
