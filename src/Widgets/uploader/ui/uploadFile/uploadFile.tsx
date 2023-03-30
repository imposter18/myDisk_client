import React, { useState } from "react";
import * as styles from "./uploadFile.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { removeUploadFile } from "../../model/store/uploadReducer";
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
	const preventDragHandler = (e: React.DragEvent<HTMLImageElement>) => {
		e.preventDefault();
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
			<div title={file.name} className={styles.fileName}>
				{file.name}
			</div>
			<div className={styles.progressBarBlock}>
				<img
					onDragStart={preventDragHandler}
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
			</div>
		</div>
	);
};
