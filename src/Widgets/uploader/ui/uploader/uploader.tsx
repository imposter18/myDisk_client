import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React from "react";
import { hideUploader } from "../../model/store/uploadReducer";
import { UploadFile } from "../uploadFile/uploadFile";

import * as styles from "./uploader.module.scss";

export const Uploader = () => {
	const files = useAppSelector((state) => state.uploadReducer.files);
	const { isVisible } = useAppSelector((state) => state.uploadReducer);
	const dispatch = useAppDispatch();
	const hideUploaderHandler = () => {
		dispatch(hideUploader());
	};
	return (
		<>
			{isVisible && (
				<div className={styles.uploader}>
					<div className={styles.header}>
						<div className={styles.title}>Downloads</div>
						<button onClick={hideUploaderHandler} className={styles.upClose}>
							X
						</button>
					</div>
					{files.map((file) => (
						<UploadFile key={file.id} file={file}></UploadFile>
					))}
				</div>
			)}
		</>
	);
};
