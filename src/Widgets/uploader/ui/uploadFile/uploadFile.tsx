import React, { useState } from "react";
import * as styles from "./uploadFile.module.scss";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { DiskPage } from "@/Pages/disk";
import { removeUploadFile } from "../../model/store/uploadReducer";
import folder from "@/Shared/assets/img/extensions/folder.svg";
import fileEarmark from "@/Shared/assets/img/extensions/fileEarmark.svg";
import { Progress } from "antd";
import { returnFileExtensionsIcon } from "@/Shared/lib/helpers/returnFileExtensionsIcon";
import { IFileToUpload } from "../../model/types/types";

interface props {
	file: IFileToUpload;
}

export const UploadFile = ({ file }: props) => {
	const { files } = useAppSelector((state) => state.uploadReducer);
	const dispatch = useAppDispatch();
	const [hiding, setHiding] = useState(false);
	const removeUploadFileHandler = () => {
		setHiding(true);
		setTimeout(() => {
			dispatch(removeUploadFile(file.uploadId));
		}, 230);
	};
	const isDownload = files.find((item) => item.uploadId === file.uploadId);
	return (
		<div className={`${styles.uploadFile} ${hiding ? styles.hidind : null}`}>
			<div className={styles.header}>
				{isDownload.status !== "active" ? (
					<div onClick={removeUploadFileHandler} className={styles.btnRemove}>
						<i className="bi bi-x-lg"></i>
					</div>
				) : (
					""
				)}
			</div>
			<div className={styles.fileName}>{file.name}</div>
			<div className={styles.progressBarBlock}>
				<img
					src={returnFileExtensionsIcon(file.type)}
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
