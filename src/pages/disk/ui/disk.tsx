import React, { useEffect, useState } from "react";
import * as styles from "./disk.module.scss";
import { FileList } from "@/Widgets/fileList";
import { CreateDir } from "@/Widgets/createDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { AlertEmail } from "@/Widgets/alertEmail";
import { useViewer } from "@/Entities/viewer";
import {
	popFromStack,
	setCurrentDir,
} from "@/Entities/file/model/store/fileSlice";
import { uploadFileThunk } from "@/Entities/file/model/thunk/uploadFileThunk";
import { Uploader } from "@/Widgets/uploader";

export const DiskPage = () => {
	const [visibleModal, setVisibleModal] = useState(false);
	const [dragEnter, setDragEnter] = useState(false);
	const { diskStack, currentDir } = useAppSelector(
		(state) => state.FileReducer
	);
	const dispatch = useAppDispatch();
	const user = useViewer();
	const backClickHandler = () => {
		dispatch(popFromStack());
		dispatch(setCurrentDir(diskStack[diskStack.length - 1]));
	};
	const fileuploadHandler = (event: any) => {
		const files = [...event.target.files];
		files.forEach((file) =>
			dispatch(uploadFileThunk({ file, dirId: currentDir }))
		);
	};
	const dragEnterHandler = (event: any) => {
		console.log("enter");
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(true);
	};
	const dragLeaveHandler = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(false);
	};
	const dropHandler = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		let files = [...event.dataTransfer.files];
		files.forEach((file) =>
			dispatch(uploadFileThunk({ file, dirId: currentDir }))
		);
		setDragEnter(false);
	};

	return (
		<>
			{!dragEnter ? (
				<div
					className={styles.wrapper}
					onDragEnter={dragEnterHandler}
					onDragLeave={dragLeaveHandler}
					onDragOver={dragEnterHandler}
				>
					<AlertEmail user={user}></AlertEmail>
					<div className={styles.btnBlock}>
						<button onClick={() => backClickHandler()}>назад</button>
						<button onClick={() => setVisibleModal(true)}>создать папку</button>
						<label className={styles.lable} htmlFor="upload">
							Upload files
						</label>
						<input
							multiple={true}
							onChange={(event) => fileuploadHandler(event)}
							className={styles.input}
							type="file"
							id="upload"
						></input>
					</div>
					<FileList></FileList>
					<CreateDir
						visibleModal={visibleModal}
						setVisibleModal={setVisibleModal}
					></CreateDir>
					<Uploader></Uploader>
				</div>
			) : (
				<div
					className={styles.dropArea}
					onDragEnter={dragEnterHandler}
					onDragLeave={dragLeaveHandler}
					onDragOver={dragEnterHandler}
					onDrop={dropHandler}
				>
					Drag files here
				</div>
			)}
		</>
	);
};
