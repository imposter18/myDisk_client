import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { Button, Divider, notification, Space, message } from "antd";
import { useAppSelector } from "@/Shared/lib/hooks/redux";

export const LeftBottomNotificationGrup = () => {
	const [api, contextHolder] = notification.useNotification();
	const { isActivated } = useAppSelector(
		(state) => state.userReducer.currentUser
	);
	const { folderName, isVisibleNot } = useAppSelector(
		(state) => state.createDirReducer
	);
	const { isLoagingDelete } = useAppSelector((state) => state.FileReducer);
	const { status, deletedFile } = useAppSelector(
		(state) => state.deleteFileReducer
	);
	const openEmailWarningNotification = () => {
		api.warning({
			message: `Warning`,
			description:
				"A confirmation email has been sent to your email, pleace check",
			placement: "bottomLeft",
			duration: 10,
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
			// key: "deleteSuccess",
			message: `Success`,
			description: `«${deletedFile}» deleted success`,
			placement: "bottomLeft",
		});
	};
	const RejectDel = (status: string) => {
		api.error({
			// key: "deleteError",
			message: `Error`,
			description: `«${deletedFile}» deleted error`,
			placement: "bottomLeft",
		});
	};
	useEffect(() => {
		if (status === "success") {
			succesDel(deletedFile);
		}
		if (status === "rejected") {
			RejectDel(deletedFile);
		}
	}, [status]);
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

	return <>{contextHolder}</>;
};
