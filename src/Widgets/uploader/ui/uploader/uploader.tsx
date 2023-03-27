import React, { useEffect, useLayoutEffect, useState } from "react";
import * as styles from "./uploader.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { clearUploader, hideUploader } from "../../model/store/uploadReducer";
import { UploadFile } from "../uploadFile/uploadFile";

export const Uploader = () => {
	const [visibleUploader, setvisibleUploader] = useState(false);
	const [hidingUploader, setHidingUploader] = useState(false);
	const { files } = useAppSelector((state) => state.uploadReducer);
	const { isVisible } = useAppSelector((state) => state.uploadReducer);
	const dispatch = useAppDispatch();
	const hideUploaderHandler = () => {
		dispatch(hideUploader());
		dispatch(clearUploader());
		setHidingUploader(true);
	};
	const isDownload = files.find((item) => item.status === "active");
	useEffect(() => {
		if (isVisible) {
			setvisibleUploader(true);
			setHidingUploader(false);
		}
		if (!isVisible) {
			setHidingUploader(true);
		}
	}, [isVisible]);
	useEffect(() => {
		if (!files.length) {
			dispatch(hideUploader());
		}
	}, [files]);
	useEffect(() => {
		setHidingUploader(false);
	}, []);
	return (
		<>
			<div
				className={`${styles.uploader} ${
					isVisible ? styles.visibleUploader : ""
				}${hidingUploader ? styles.hidindUploader : ""}`}
			>
				<div className={styles.header}>
					<div className={styles.title}>Downloads</div>
					{!isDownload ? (
						<button onClick={hideUploaderHandler} className={styles.upClose}>
							<i className="bi bi-x-lg"></i>
						</button>
					) : (
						""
					)}
				</div>
				<div className={styles.content}>
					{files.map((file) => (
						<UploadFile key={file.uploadId} file={file}></UploadFile>
					))}
				</div>
			</div>
		</>
	);
};
