import React, { useEffect, useState } from "react";
import * as styles from "./disk.module.scss";
import { FileList } from "@/Widgets/fileList";
import { CreateDir } from "@/Widgets/createDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { useViewer } from "@/Entities/viewer";
import {
	popFromStack,
	setCurrentDir,
} from "@/Entities/file/model/store/fileSlice";
import { uploadFileThunk } from "@/Entities/file/model/thunk/uploadFileThunk";
import { Uploader } from "@/Widgets/uploader";
import { Button, Empty } from "antd";
import { Stack } from "@/Widgets/DirStack";
import { changeUploadStatus } from "@/Widgets/uploader/model/store/uploadReducer";
import { AxiosError, AxiosResponse } from "axios";
import { LeftBottomNotificationGrup } from "@/Widgets/leftBottomNotificationGrup/leftBottomNotificationGrup";
import { notification, Space } from "antd";
import { TopCenterNotificationGrup } from "@/Widgets/topCenterNotificationGrup";
import { CastomBtn } from "@/Shared/ui/btn";
import { LeftBlock } from "./leftBlock/leftBlock";

export const DiskPage = () => {
	const [dragEnter, setDragEnter] = useState(false);

	const { files, currentDir } = useAppSelector((state) => state.FileReducer);
	const dispatch = useAppDispatch();
	const user = useViewer();

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
		// files.forEach((file) =>
		// 	dispatch(uploadFileThunk({ file, dirId: currentDir?._id }))
		// );
		fileuploadHandler(files);
		setDragEnter(false);
	};
	const fileuploadHandler = (files: any) => {
		files.forEach((file: any) =>
			dispatch(uploadFileThunk({ file, dirId: currentDir?._id })).then(
				(res: any) => {
					if (res.meta.requestStatus === "fulfilled") {
						dispatch(
							changeUploadStatus({
								uploadId: res.payload.uploadId,
								status: "success",
							})
						);
					}
					if (res.meta.requestStatus === "rejected") {
						dispatch(
							changeUploadStatus({
								uploadId: res.payload?.response?.data?.message?.data.uploadId,
								status: "exception",
							})
						);
					}
				}
			)
		);
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
					{/* <AlertEmail user={user}></AlertEmail> */}

					<div className={styles.disk}>
						<LeftBlock fileuploadHandler={fileuploadHandler}></LeftBlock>
						<div
							onContextMenu={(event) => {
								event.preventDefault();
								event.stopPropagation();
							}}
							className={styles.rightBlock}
						>
							<Stack></Stack>
							<FileList></FileList>
							<a href="#" className={styles.footerLinks}>
								<i className="bi bi-github"></i>
								GitHub
							</a>
						</div>
					</div>
					<div className={styles.marginBottom}></div>

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
					Drop files here
				</div>
			)}
			<LeftBottomNotificationGrup></LeftBottomNotificationGrup>
			<TopCenterNotificationGrup></TopCenterNotificationGrup>
		</>
	);
};
