import { downloadFileHTTP } from "@/Entities/file";
import { IFile } from "@/Shared/Types/IFile";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import React from "react";
import * as styles from "./downloadFile.module.scss";

interface Iprops {
	file: IFileResponse;
	className: string;
}

export const DownloadFileBtn = ({ file, className }: Iprops) => {
	const downloadClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		downloadFileHTTP(file);
	};
	return (
		// <button
		// 	className={`${styles.btn} ${className}`}
		// 	onClick={downloadClickHandler}
		// >
		// 	<i className="bi bi-cloud-arrow-down-fill"></i>
		// 	Download
		// </button>

		<a
			className={`${styles.btn} ${className}`}
			href={`${process.env.REACT_APP_API_URL}\\download?id=${file._id}`}
			download
		>
			<i className="bi bi-cloud-arrow-down-fill"></i>
			Download
		</a>
	);
};
