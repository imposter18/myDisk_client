import React, { useState } from "react";
import * as styles from "./uploadFile.module.scss";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { DiskPage } from "@/Pages/disk";
import { removeUploadFile } from "../../model/store/uploadReducer";
import folder from "@/Shared/assets/img/extensions/folder.svg";
import fileEarmark from "@/Shared/assets/img/extensions/fileEarmark.svg";
import { Progress } from "antd";

interface props {
	file: {
		uploadId: string;
		name: string;
		progress: number;
		type: string;
		status: "normal" | "exception" | "active" | "success";
	};
}

export const UploadFile = ({ file }: props) => {
	const dispatch = useAppDispatch();
	const [hiding, setHiding] = useState(false);
	const removeUploadFileHandler = () => {
		setHiding(true);
		setTimeout(() => {
			dispatch(removeUploadFile(file.uploadId));
		}, 230);
	};
	// console.log(file.status, "file.status");
	return (
		<div className={`${styles.uploadFile} ${hiding ? styles.hidind : null}`}>
			<div className={styles.header}>
				<button onClick={removeUploadFileHandler} className={styles.btnRemove}>
					<i className="bi bi-x-lg"></i>
				</button>
			</div>
			<div className={styles.fileName}>{file.name}</div>
			<div className={styles.progressBarBlock}>
				<img
					src={file.type === "dir" ? folder : fileEarmark}
					alt=""
					className={styles.img}
				></img>
				<Progress
					className={styles.progress}
					percent={file.progress}
					size="small"
					status={file.status}
				/>
				{/* <div
					className={styles.uploadBar}
					style={{ width: file.progress + "%" }}
				></div>
				<div className={styles.progress}>{file.progress}%</div> */}
			</div>
		</div>
	);
};
