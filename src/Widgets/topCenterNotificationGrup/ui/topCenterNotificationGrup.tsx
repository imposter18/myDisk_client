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
	const { renamingFile, status } = useAppSelector(
		(state) => state.renameFileReducer
	);
	const RenameSuccess = (fileName: string) => {
		messageApi.open({
			type: "success",
			content: `«${fileName}» has been renamed`,
			// className: "custom-class",
			// duration: 0,
		});
	};
	const openCreateDirSuccess = (folderName: string) => {
		messageApi.open({
			type: "success",
			content: `Folder «${folderName}» has been created`,
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
			});
		} else {
			messageApi.error({
				content: `Deleted error message: unexpected error`,
			});
		}
	};
	useEffect(() => {
		if (status === "success") {
			RenameSuccess(renamingFile);
		}
	}, [renamingFile]);
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
