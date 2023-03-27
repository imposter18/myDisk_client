import React, { useEffect, useRef, useState } from "react";
import * as styles from "./file.module.scss";
import folder from "@/Shared/assets/img/extensions/folder.svg";
import fileEarmark from "@/Shared/assets/img/extensions/fileEarmark.svg";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";

import { FileContextMenu } from "@/Widgets/fileContectMenu";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { sizeFormat } from "@/Shared/lib/helpers/sizeFormat";
import moment from "moment";
import { returnFileExtensionsIcon } from "@/Shared/lib/helpers/returnFileExtensionsIcon";

interface IProps {
	file: IFileResponse;
	className?: string;
	onClick: (arg: IFileResponse) => void;
}

export const File = React.memo(({ file, onClick, className }: IProps) => {
	const { ref, isComponentVisible, setIsComponentVisible, points, setPoints } =
		useComponentVisible();
	const { id } = useAppSelector((state) => state.userReducer.currentUser);
	const { view } = useAppSelector((state) => state.viewFileListReducer);

	const contextnMenuHandler = (
		event: React.MouseEvent<HTMLDivElement> | any
	) => {
		event.stopPropagation();
		event.preventDefault();
		setIsComponentVisible(true);

		setPoints({
			x: event.pageX,
			y: event.pageY,
		});
	};
	const preventDragHandler = (e: React.DragEvent<HTMLImageElement>) => {
		e.preventDefault();
	};
	const setImg = () => {
		if (file.type === "dir") {
			return (
				<img
					onDragStart={preventDragHandler}
					src={folder}
					alt="logo"
					className={styles.logo}
				></img>
			);
		}
		if (file.type === "jpg" || file.type === "png") {
			return (
				<img
					src={`http://localhost:5000/api/files/${id}/${file.path}`}
					alt="logo"
					className={styles.img}
					onDragStart={preventDragHandler}
				></img>
			);
		} else {
			return (
				<img
					src={returnFileExtensionsIcon(file.type)}
					alt="logo"
					className={styles.logo}
					onDragStart={preventDragHandler}
				></img>
			);
		}
	};
	if (view === "List") {
		return (
			<>
				<div
					onClick={() => onClick(file)}
					onContextMenu={contextnMenuHandler}
					className={`${styles.file} ${isComponentVisible && styles.active}`}
				>
					{setImg()}
					<div className={styles.name}>{file.name}</div>

					<div className={styles.date}>
						{moment(file.date).format("DD.MM.YYYY")}
					</div>
					<div className={styles.time}>
						{moment(file.date).format("HH:mm ")}
					</div>
					<div className={styles.size}>
						{file.type !== "dir" ? sizeFormat(file.size) : ""}
					</div>

					<FileContextMenu
						setContextMenuVisible={setIsComponentVisible}
						isContextMenuVisible={isComponentVisible}
						menuRef={ref}
						top={points.y}
						left={points.x}
						file={file}
					></FileContextMenu>
				</div>
			</>
		);
	}
	if (view === "Tiles") {
		return (
			<>
				<div
					onClick={() => onClick(file)}
					onContextMenu={contextnMenuHandler}
					className={`${styles.fileTiles} ${
						isComponentVisible && styles.active
					}`}
				>
					<div className={styles.imgWrapper}>{setImg()}</div>

					<div aria-hidden="true" title={file.name} className={styles.name}>
						{file.name}
					</div>

					<FileContextMenu
						setContextMenuVisible={setIsComponentVisible}
						isContextMenuVisible={isComponentVisible}
						menuRef={ref}
						top={points.y}
						left={points.x}
						file={file}
					></FileContextMenu>
				</div>
			</>
		);
	}
	if (view === "Large tiles") {
		return (
			<>
				<div
					onClick={() => onClick(file)}
					onContextMenu={contextnMenuHandler}
					className={`${styles.largeTiles} ${
						isComponentVisible && styles.active
					}`}
				>
					<div className={styles.imgWrapperLarge}>{setImg()}</div>
					<div aria-hidden="true" title={file.name} className={styles.name}>
						{file.name}
					</div>

					<FileContextMenu
						setContextMenuVisible={setIsComponentVisible}
						isContextMenuVisible={isComponentVisible}
						menuRef={ref}
						top={points.y}
						left={points.x}
						file={file}
					></FileContextMenu>
				</div>
			</>
		);
	}
});
