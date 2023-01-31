import React from "react";
import * as styles from "./file.module.scss";
import folder from "@/Shared/assets/extensions/folder.svg";
import file from "@/Shared/assets/extensions/file-earmark.svg";

export const File = ({ file }: any) => {
	return (
		<div className={styles.file}>
			<img
				src={file.type === "dir" ? folder : file}
				alt=""
				className={styles.img}
			></img>
			<div>{file.name}</div>
			<div className={styles.date}>{file.date.slice(0, 10)}</div>
			<div className={styles.size}>{file.size}</div>
		</div>
	);
};
