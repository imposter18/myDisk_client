import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { Button, Divider, notification, Space, message } from "antd";
import { useAppSelector } from "@/Shared/lib/hooks/redux";
import { IFileUpload } from "../uploader";
import { IUploadError, IUploadResponseError } from "@/Entities/file";
import * as styles from "./leftBottomNotificationGrup.module.scss";

export const LeftBottomNotificationGrup = () => {
	const [api, contextHolder] = notification.useNotification();
	notification.config({
		bottom: 0,
		duration: 3,
		// rtl: true,
	});
	const { uploadError } = useAppSelector((state) => state.FileReducer);
	const { files: uploadFiles } = useAppSelector((state) => state.uploadReducer);
	const { isActivated } = useAppSelector(
		(state) => state.userReducer.currentUser
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
			style: {
				bottom: -20,
			},
		});
	};

	const RejectUpload = (uploadError: IUploadError) => {
		if (uploadError.message === "File already exist") {
			api.error({
				message: `Error`,
				description: `File «${uploadError.data.fileName}» already exist!`,
				placement: "bottomLeft",
				duration: 5,
				style: {
					bottom: -20,
				},
			});
		} else {
			if (uploadError.message) {
				api.error({
					message: `Error`,
					description: `Upload error message:${uploadError.message}`,
					placement: "bottomLeft",
					duration: 5,
					style: {
						bottom: -20,
					},
				});
			}
		}
	};

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

	return <div className={styles.notGrup}>{contextHolder}</div>;
};
