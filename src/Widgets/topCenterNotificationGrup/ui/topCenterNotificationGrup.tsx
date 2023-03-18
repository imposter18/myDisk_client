import React, { useEffect } from "react";
import { message } from "antd";
import { useAppSelector } from "@/Shared/lib/hooks/redux";
import * as styles from "./topCenterNotificationGrup.module.scss";

export const TopCenterNotificationGrup = () => {
	const [messageApi, contextHolder] = message.useMessage();

	const { isLoagingDelete } = useAppSelector((state) => state.FileReducer);
	const { status: deleteStatus, deletedFile } = useAppSelector(
		(state) => state.deleteFileReducer
	);
	const { folderName, isVisibleNot } = useAppSelector(
		(state) => state.createDirReducer
	);
	const openCreateDirSuccess = (folderName: string) => {
		messageApi.open({
			type: "success",
			content: `Folder «${folderName}» has been created`,
			// className={`${styles.global}`},
			className: "custom-class",
			// duration: 0,
		});
	};
	const deleteNot = (deletedFile: string) => {
		messageApi.open({
			key: "deleteNot",
			type: "loading",
			content: "Deleting...",
			// duration: 0,
		});
	};
	const succesDel = (status: string) => {
		messageApi.success({
			content: `«${deletedFile}» deleted`,
			// description: ,
			// placement: "bottomLeft",
		});
	};
	const RejectDel = (status: string) => {
		if (deletedFile) {
			messageApi.error({
				content: `«${deletedFile}» deleted error`,
				// description: `«${deletedFile}» deleted error`,
				// placement: "bottomLeft",
			});
		} else {
			messageApi.error({
				// message: `Error`,
				content: `Deleted error message: unexpected error`,
				// description: ,
				// placement: "bottomLeft",
			});
		}
	};
	useEffect(() => {
		if (folderName) {
			openCreateDirSuccess(folderName);
		}
	}, [folderName]);
	useEffect(() => {
		if (deleteStatus === "success") {
			succesDel(deletedFile);
		}
		if (deleteStatus === "rejected") {
			RejectDel(deletedFile);
		}
	}, [deleteStatus]);

	useEffect(() => {
		if (isLoagingDelete) {
			deleteNot(deletedFile);
			// message.destroy("deleteError");
			// message.destroy("deleteSuccess");
		}
		if (!isLoagingDelete) {
			messageApi.destroy("deleteNot");
		}
	}, [isLoagingDelete]);

	return <div className={styles.notGrup}>{contextHolder}</div>;
};
