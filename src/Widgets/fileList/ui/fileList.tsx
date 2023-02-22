import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import * as styles from "./fileList.module.scss";
import { File } from "@/Entities/file";
import { getFiles } from "../../../Entities/file/model/thunk/getFile";

export const FileList = () => {
	const { currentDir } = useAppSelector((state) => state.FileReducer);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getFiles(currentDir));
	}, [currentDir]);
	const files = useAppSelector((state) => state.FileReducer.files);
	return (
		<div className={styles.fileList}>
			<div>folder</div>
			<div className={styles.header}>
				<div className={styles.name}>Name</div>
				<div className={styles.date}>Date</div>
				<div className={styles.size}>Size</div>
			</div>
			{files.map((file) => (
				<File file={file} key={file._id}></File>
			))}
		</div>
	);
};
