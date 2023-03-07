import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import * as styles from "./fileList.module.scss";
import { File, pushToStack, setCurrentDir } from "@/Entities/file";
import { getFiles } from "../../../Entities/file/model/thunk/getFile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Empty, Spin } from "antd";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export const FileList = () => {
	const { currentDir, files, isLoaging } = useAppSelector(
		(state) => state.FileReducer
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();

	useEffect(() => {
		if (params.folderId) {
			dispatch(getFiles(params.folderId));
			// dispatch(setCurrentDir(null))
		}
		if (!params.folderId) {
			dispatch(getFiles(null));
			dispatch(setCurrentDir(null));
		}
	}, [params]);

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
