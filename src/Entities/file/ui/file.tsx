import React from "react";
import * as styles from "./file.module.scss";
import folder from "@/Shared/assets/img/extensions/folder.svg";
import fileEarmark from "@/Shared/assets/img/extensions/fileEarmark.svg";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

interface IProps {
	file: IFileResponse;
}

export const File = ({ file }: IProps) => {
	return (
		<div className={styles.file}>
			<img
				src={file.type === "dir" ? folder : fileEarmark}
				alt=""
				className={styles.img}
			></img>
			<div>{file.name}</div>

			<div className={styles.date}> {file.date.toString().slice(0, 10)}</div>
			<div className={styles.size}>{file.size}</div>
		</div>
	);
};
