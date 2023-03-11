import { deleteFileThunk, downloadFileHTTP } from "@/Entities/file";
import { DeleteFileBtn } from "@/Featurs/deleteFileBtn";
import { DownloadFileBtn } from "@/Featurs/downloadFileBtn";
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

	return (
		<>
			<div
				ref={menuRef}
				id="contextMenu"
				className={styles.contextMenu}
				style={{ top: top, left: left }}
			>
				{file.type !== "dir" && (
					<DownloadFileBtn
						className={styles.contextItem}
						file={file}
					></DownloadFileBtn>
				)}
				<DeleteFileBtn
					className={styles.contextItem}
					file={file}
				></DeleteFileBtn>
			</div>
		</>
	);
};
