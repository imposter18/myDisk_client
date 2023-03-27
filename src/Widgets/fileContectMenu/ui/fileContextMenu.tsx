import React, { Ref } from "react";
import * as styles from "./fileContextMenu.module.scss";
import { DeleteFileBtn } from "@/Featurs/deleteFileBtn";
import { DownloadFileBtn } from "@/Featurs/downloadFileBtn";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { ModalRenameFile } from "@/Featurs/modalRenameFile";

interface IProps {
	file: IFileResponse;
	top: number;
	left: number;
	menuRef: Ref<HTMLDivElement>;
	setContextMenuVisible: (arg: boolean) => void;
	isContextMenuVisible: boolean;
}
export const FileContextMenu = ({
	isContextMenuVisible,
	setContextMenuVisible,
	file,
	top,
	left,
	menuRef,
}: IProps) => {
	const dispatch = useAppDispatch();
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible();

	const modalRenameOpenHandler = (event: any) => {
		setIsComponentVisible(true);
		setContextMenuVisible(false);
	};

	const stopPropaginationOnContextMenu = (
		event: React.MouseEvent<HTMLDivElement>
	) => {
		event.stopPropagation();
	};

	return (
		<>
			{isContextMenuVisible && (
				<div
					ref={menuRef}
					id="contextMenu"
					className={styles.contextMenu}
					style={{ top: top, left: left }}
					onClick={stopPropaginationOnContextMenu}
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
					<div
						className={`${styles.contextItem} ${styles.renameItem}`}
						onClick={modalRenameOpenHandler}
					>
						<span>
							<svg
								className="ufo-icon__icon"
								width="16"
								height="16"
								role="none"
								viewBox="0 0 16 16"
							>
								<g fill-rule="evenodd" fill="currentColor">
									<path d="M5 3h2L3 13H1z"></path>
									<path d="M7 3H5l4 10h2z"></path>
									<path d="M3 9h6v2H3zm10-9h2v16h-2z"></path>
								</g>
							</svg>
						</span>
						Rename
					</div>
				</div>
			)}
			<ModalRenameFile
				file={file}
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
			></ModalRenameFile>
		</>
	);
};
