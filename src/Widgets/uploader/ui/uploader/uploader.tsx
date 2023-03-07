import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { hideUploader } from "../../model/store/uploadReducer";
import { UploadFile } from "../uploadFile/uploadFile";

import * as styles from "./uploader.module.scss";

export const Uploader = () => {
	const { firstLoading } = useAppSelector((state) => state.userReducer);
	const [visibleUploader, setvisibleUploader] = useState(false);
	const [hidingUploader, setHidingUploader] = useState(false);
	const files = useAppSelector((state) => state.uploadReducer.files);
	const { isVisible } = useAppSelector((state) => state.uploadReducer);
	const dispatch = useAppDispatch();
	const hideUploaderHandler = () => {
		dispatch(hideUploader());
		setHidingUploader(true);
	};
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
					<button onClick={hideUploaderHandler} className={styles.upClose}>
						<i className="bi bi-x-lg"></i>
					</button>
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
