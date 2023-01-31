import { useAppSelector } from "@/Shared/lib/hooks/redux";
import React from "react";
import * as styles from "./fileList.module.scss";
import { File } from "../file/file";

export const FileList = () => {
	const files = useAppSelector((state) => state.FileReducer.files);
	return (
		<div className={styles.fileList}>
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
