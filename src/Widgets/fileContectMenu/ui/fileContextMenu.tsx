import { deleteFile, downloadFileHTTP } from "@/Entities/file";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import React from "react";
import * as styles from "./fileContextMenu.module.scss";
interface IProps {
	file: IFileResponse;
	top: number;
	left: number;
	menuRef: any;
}
export const FileContextMenu = ({ file, top, left, menuRef }: IProps) => {
	const dispatch = useAppDispatch();
	const downloadClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		downloadFileHTTP(file);
	};
	const deleteFileHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		dispatch(deleteFile(file));
	};

	return (
		<>
			<div
				ref={menuRef}
				className={styles.contextMenu}
				style={{ top: top, left: left }}
			>
				{file.type !== "dir" && (
					<button onClick={downloadClickHandler}>download</button>
				)}
				<button onClick={deleteFileHandler}>delete</button>
			</div>
		</>
	);
};
