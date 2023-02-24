import React, { useEffect, useRef, useState } from "react";
import * as styles from "./file.module.scss";
import folder from "@/Shared/assets/img/extensions/folder.svg";
import fileEarmark from "@/Shared/assets/img/extensions/fileEarmark.svg";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import {
	pushToStack,
	setCurrentDir,
} from "@/Entities/file/model/store/fileSlice";
import { FileContextMenu } from "@/Widgets/fileContectMenu";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface IProps {
	file: IFileResponse;
	onClick: any;
}

export const File = ({ file, onClick }: IProps) => {
	const { ref, isComponentVisible, setIsComponentVisible, points, setPoints } =
		useComponentVisible();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	console.log(params, "params");
	const { currentDir } = useAppSelector((state) => state.FileReducer);

	const contextnMenuHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		event.preventDefault();
		setIsComponentVisible(true);
		setPoints({
			x: event.pageX,
			y: event.pageY,
		});
	};

	return (
		<>
			<div
				onClick={() => onClick(file)}
				onContextMenu={contextnMenuHandler}
				className={styles.file}
			>
				<img
					src={file.type === "dir" ? folder : fileEarmark}
					alt=""
					className={styles.img}
				></img>
				<div>{file.name}</div>

				<div className={styles.date}> {file.date.toString().slice(0, 10)}</div>
				<div className={styles.size}>{file.size}</div>
			</div>
			{isComponentVisible && (
				<FileContextMenu
					menuRef={ref}
					top={points.y}
					left={points.x}
					file={file}
				></FileContextMenu>
			)}
		</>
	);
};
