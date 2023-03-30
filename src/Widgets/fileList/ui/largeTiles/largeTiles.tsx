import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { Spin } from "antd";
import React from "react";
import * as styles from "./largeTiles.module.scss";
import { File } from "@/Entities/file";

interface IProps {
	files: IFileResponse[];
	isLoaging: boolean;
	clickHandller: any;
}
export const LargeTiles = ({ files, isLoaging, clickHandller }: IProps) => {
	return (
		<>
			<div
				className={`${styles.fileListLargeTiles} ${
					isLoaging ? styles.fileListloading : ""
				}`}
			>
				{isLoaging ? (
					<Spin className={styles.spinner} size="large" />
				) : (
					files.map((file) => (
						<File onClick={clickHandller} file={file} key={file._id}></File>
					))
				)}
			</div>
		</>
	);
};
