import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { Button, Divider, notification, Space, message } from "antd";
import { useAppSelector } from "@/Shared/lib/hooks/redux";
import { IFileUpload } from "../uploader";
import { IUploadError, IUploadResponseError } from "@/Entities/file";

export const LeftBottomNotificationGrup = () => {
	const [api, contextHolder] = notification.useNotification();
	const { uploadError } = useAppSelector((state) => state.FileReducer);
	const { files: uploadFiles } = useAppSelector((state) => state.uploadReducer);
	const { isActivated } = useAppSelector(
		(state) => state.userReducer.currentUser
	);
	const { folderName, isVisibleNot } = useAppSelector(
		(state) => state.createDirReducer
	);
	const { isLoagingDelete } = useAppSelector((state) => state.FileReducer);
	const { status: deleteStatus, deletedFile } = useAppSelector(
		(state) => state.deleteFileReducer
	);
	const openEmailWarningNotification = () => {
		api.warning({
			message: `Warning`,
			description:
				"A confirmation email has been sent to your email, pleace check",
			placement: "bottomLeft",
			duration: 7,
		});
	};
	const openCreateDirSuccess = (folderName: string) => {
		api.success({
			message: `Success`,
			description: `Folder «${folderName}» has been created`,
			placement: "bottomLeft",
		});
	};
	const succesDel = (status: string) => {
		api.success({
			message: `Success`,
			description: `«${deletedFile}» deleted success`,
			placement: "bottomLeft",
		});
	};
	const RejectDel = (status: string) => {
		if (deletedFile) {
			api.error({
				message: `Error`,
				description: `«${deletedFile}» deleted error`,
				placement: "bottomLeft",
			});
		} else {
			api.error({
				message: `Error`,
				description: `Deleted error message: unexpected error`,
				placement: "bottomLeft",
			});
		}
	};
	const RejectUpload = (uploadError: IUploadError) => {
		if (uploadError.message === "File already exist") {
			api.error({
				message: `Error`,
				description: `File «${uploadError.data.fileName}» already exist!`,
				placement: "bottomLeft",
				duration: 5,
			});
		} else {
			if (uploadError.message) {
				api.error({
					message: `Error`,
					description: `Upload error message:${uploadError.message}`,
					placement: "bottomLeft",
					duration: 5,
				});
			}
		}
	};
	useEffect(() => {
		if (deleteStatus === "success") {
			succesDel(deletedFile);
		}
		if (deleteStatus === "rejected") {
			RejectDel(deletedFile);
		}
	}, [deleteStatus]);
	useEffect(() => {
		if (folderName) {
			openCreateDirSuccess(folderName);
		}
	}, [folderName]);

	useLayoutEffect(() => {
		if (!isActivated) {
			openEmailWarningNotification();
		}
	}, []);
	useEffect(() => {
		if (uploadError) {
			RejectUpload(uploadError);
		}
	}, [uploadError]);

	return <>{contextHolder}</>;
};
