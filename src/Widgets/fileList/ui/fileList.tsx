import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import * as styles from "./fileList.module.scss";
import { File, setCurrentDir } from "@/Entities/file";
import { getFileThunk } from "../../../Entities/file/model/thunk/getFileThunk";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Empty, Spin } from "antd";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { ViewList } from "./list/viewList";
import { ViewTiles } from "./tiles/viewTiles";
import { LargeTiles } from "./largeTiles/largeTiles";

export const FileList = () => {
	const { currentDir, files, isLoaging } = useAppSelector(
		(state) => state.FileReducer
	);
	const { sort, derection } = useAppSelector((state) => state.sortFileReducer);
	const { searchValue } = useAppSelector((state) => state.searchFilesReducer);
	const { view } = useAppSelector((state) => state.viewFileListReducer);

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

	const clickHandller = (file: IFileResponse) => {
		if (file.type === "dir") {
			dispatch(setCurrentDir(file));
			navigate(`/drive/folder/${file._id}`, { replace: false });
		}
	};
	const returnViewVariant = (view: string) => {
		if (view === "List") {
			return (
				<ViewList
					files={files}
					isLoaging={isLoaging}
					clickHandller={clickHandller}
				></ViewList>
			);
		}
		if (view === "Tiles") {
			return (
				<ViewTiles
					files={files}
					isLoaging={isLoaging}
					clickHandller={clickHandller}
				></ViewTiles>
			);
		}
		if (view === "Large tiles") {
			return (
				<LargeTiles
					files={files}
					isLoaging={isLoaging}
					clickHandller={clickHandller}
				></LargeTiles>
			);
		}
	};

	return (
		<div className={styles.fileListWrapper}>
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
				returnViewVariant(view)
			)}
		</div>
	);
};
