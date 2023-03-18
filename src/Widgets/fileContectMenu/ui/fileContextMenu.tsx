import React, { Ref } from "react";
import * as styles from "./fileContextMenu.module.scss";
import { DeleteFileBtn } from "@/Featurs/deleteFileBtn";
import { DownloadFileBtn } from "@/Featurs/downloadFileBtn";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

interface IProps {
	file: IFileResponse;
	top: number;
	left: number;
	menuRef: Ref<HTMLDivElement>;
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
