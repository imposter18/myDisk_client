import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import * as styles from "./fileList.module.scss";
import { File, pushToStack, setCurrentDir } from "@/Entities/file";
import { getFiles } from "../../../Entities/file/model/thunk/getFile";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const FileList = () => {
	const { currentDir } = useAppSelector((state) => state.FileReducer);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();

	useEffect(() => {
		if (params.folderId) {
			dispatch(getFiles(params.folderId));
		}
		if (!params.folderId) {
			dispatch(getFiles(null));
		}
	}, [params]);

	const files = useAppSelector((state) => state.FileReducer.files);
	const clickHandller = (file: any) => {
		if (file.type === "dir") {
			navigate(`/folder/${file._id}`, { replace: false });
		}
	};

	return (
		<div className={styles.fileList}>
			<div>folder</div>
			<div className={styles.header}>
				<div className={styles.name}>Name</div>
				<div className={styles.date}>Date</div>
				<div className={styles.size}>Size</div>
			</div>
			{files.map((file) => (
				<File onClick={clickHandller} file={file} key={file._id}></File>
			))}
		</div>
	);
};
