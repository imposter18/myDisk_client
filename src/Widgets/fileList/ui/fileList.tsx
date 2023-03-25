import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import * as styles from "./fileList.module.scss";
import { File, setCurrentDir } from "@/Entities/file";
import { getFileThunk } from "../../../Entities/file/model/thunk/getFileThunk";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Empty, Spin } from "antd";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";

export const FileList = () => {
	const { currentDir, files, isLoaging } = useAppSelector(
		(state) => state.FileReducer
	);
	const { sort, derection } = useAppSelector((state) => state.sortFileReducer);
	const { searchValue } = useAppSelector((state) => state.searchFilesReducer);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (params.folderId) {
			dispatch(
				getFileThunk({
					currentDir: params.folderId,
					sort,
					derection,
					search: searchValue,
				})
			);
		}
		if (!params.folderId) {
			dispatch(
				getFileThunk({ currentDir: null, sort, derection, search: searchValue })
			);
			// странный код не увенер что это надо
			// dispatch(
			// 	setCurrentDir({
			// 		currentDir: null,
			// 		sort,
			// 		derection,
			// 		search: searchValue,
			// 	})
			// );
		}
	}, [params.folderId, sort, derection, searchValue]);
	// useEffect(() => {
	// 	if (!currentDir) {
	// 		navigate(`/drive/my-disk`);
	// 	}
	// }, [currentDir]);

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
						searchValue
							? "Nothing found"
							: "Click the upload or drag file to this area to upload"
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
