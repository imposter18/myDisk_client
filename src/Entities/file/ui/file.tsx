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
	// console.log(params, "params");
	const { currentDir } = useAppSelector((state) => state.FileReducer);
	const { id } = useAppSelector((state) => state.userReducer.currentUser);

	const contextnMenuHandler = (
		event: React.MouseEvent<HTMLDivElement> | any
	) => {
		event.stopPropagation();
		event.preventDefault();
		setIsComponentVisible(true);
		// console.log(event, "event");
		// nativeEvent устарело!!!
		setPoints({
			x: event.nativeEvent.layerX,
			y: event.nativeEvent.layerY,
		});
	};
	const setImg = () => {
		if (file.type === "dir") {
			return <img src={folder} alt="logo" className={styles.logo}></img>;
		}
		if (file.type === "jpg" || file.type === "png") {
			return (
				<img
					src={`http://localhost:5000/api/files/${id}/${file.path}`}
					alt="logo"
					className={styles.img}
				></img>
			);
		} else {
			return <img src={fileEarmark} alt="logo" className={styles.logo}></img>;
		}
	};

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
				<div className={styles.time}>{moment(file.date).format("HH:mm ")}</div>
				<div className={styles.size}>
					{file.type !== "dir" ? sizeFormat(file.size) : ""}
				</div>
				{isComponentVisible && (
					<FileContextMenu
						menuRef={ref}
						top={points.y}
						left={points.x}
						file={file}
					></FileContextMenu>
				)}
			</div>
		</>
	);
};
