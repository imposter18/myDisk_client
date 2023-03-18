import React, { useEffect, useState, useCallback } from "react";
import * as styles from "./disk.module.scss";

// import { CreateDir } from "@/Widgets/createDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { useViewer } from "@/Entities/viewer";

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
import { LeftDiskBlock } from "./leftDiskBlock/LeftDiskBlock";
import { ListSettings } from "@/Widgets/listSettings";
import { RightDiskBlock } from "./rightBlock/rightBlock";

export const DiskPage = React.memo(() => {
	const [dragEnter, setDragEnter] = useState(false);

	const { currentDir } = useAppSelector((state) => state.FileReducer);

	const dispatch = useAppDispatch();

	const dragEnterHandler = (event: any) => {
		// console.log("enter");
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
	const fileuploadHandler = useCallback((files: any) => {
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
	}, []);

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
