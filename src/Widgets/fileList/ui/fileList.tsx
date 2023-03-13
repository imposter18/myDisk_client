import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import * as styles from "./fileList.module.scss";
import { File, setCurrentDir } from "@/Entities/file";
import { getFiles } from "../../../Entities/file/model/thunk/getFile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Empty, Spin } from "antd";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export const FileList = () => {
	const { currentDir, files, isLoaging } = useAppSelector(
		(state) => state.FileReducer
	);
	const { sort, derection } = useAppSelector((state) => state.sortFileReducer);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();

	useEffect(() => {
		if (params.folderId) {
			dispatch(getFiles({ currentDir: params.folderId, sort, derection }));
			// dispatch(setCurrentDir(null))
		}
		if (!params.folderId) {
			dispatch(getFiles({ currentDir: null, sort, derection }));
			dispatch(setCurrentDir({ currentDir: null, sort, derection }));
		}
	}, [params.folderId, sort, derection]);

	const clickHandller = (file: IFileResponse) => {
		if (file.type === "dir") {
			dispatch(setCurrentDir(file));
			navigate(`/drive/folder/${file._id}`, { replace: false });
		}
	};

	return (
		<>
			{!files.length && !currentDir && !isLoaging ? (
				<Empty
					className={styles.empty}
					description={
						"Click the upload button or drag file to this area to upload"
					}
				/>
			) : (
				<div className={styles.fileList}>
					{isLoaging ? (
						<Spin className={styles.spinner} size="large" />
					) : (
						files.map((file) => (
							<File onClick={clickHandller} file={file} key={file._id}></File>
						))
					)}
				</div>
			)}
		</>
	);
};
