import React, { useEffect, useState, useCallback } from "react";
import * as styles from "./disk.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { uploadFileThunk } from "@/Entities/file/model/thunk/uploadFileThunk";
import { Uploader } from "@/Widgets/uploader";
import { changeUploadStatus } from "@/Widgets/uploader/model/store/uploadReducer";
import { LeftBottomNotificationGrup } from "@/Widgets/leftBottomNotificationGrup/leftBottomNotificationGrup";
import { TopCenterNotificationGrup } from "@/Widgets/topCenterNotificationGrup";
import { LeftDiskBlock } from "./leftDiskBlock/LeftDiskBlock";
import { RightDiskBlock } from "./rightBlock/rightBlock";

export const DiskPage = React.memo(() => {
	const [dragEnter, setDragEnter] = useState(false);

	const { currentDir } = useAppSelector((state) => state.FileReducer);

	const dispatch = useAppDispatch();

	const dragEnterHandler = (event: React.DragEvent<HTMLInputElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(true);
	};
	const dragLeaveHandler = (event: React.DragEvent<HTMLInputElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(false);
	};
	const dropHandler = (event: React.DragEvent<HTMLInputElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const files = event.dataTransfer.files;
		fileuploadHandler(files);
		setDragEnter(false);
	};
	const fileuploadHandler = useCallback(
		(files: File[] | FileList) => {
			Array.from(files).forEach((file: File) =>
				dispatch(uploadFileThunk({ file, dirId: currentDir?._id })).then(
					// тут без any никак и вообще это немного костыли
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
							if (res.payload.response.data.data.uploadId) {
								dispatch(
									changeUploadStatus({
										uploadId: res.payload.response.data.data.uploadId,
										status: "exception",
									})
								);
							}
						}
					}
				)
			);
		},
		[currentDir]
	);

	return (
		<>
			{!dragEnter ? (
				<div
					className={styles.wrapper}
					onDragEnter={dragEnterHandler}
					onDragLeave={dragLeaveHandler}
					onDragOver={dragEnterHandler}
				>
					<div className={styles.disk}>
						<LeftDiskBlock
							fileuploadHandler={fileuploadHandler}
						></LeftDiskBlock>
						<RightDiskBlock></RightDiskBlock>
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
					Drag files here
				</div>
			)}
			<LeftBottomNotificationGrup></LeftBottomNotificationGrup>
			<TopCenterNotificationGrup></TopCenterNotificationGrup>
		</>
	);
});
