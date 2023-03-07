import React, { useEffect } from "react";
import { message } from "antd";
import { useAppSelector } from "@/Shared/lib/hooks/redux";

export const TopCenterNotificationGrup = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { isLoagingDelete } = useAppSelector((state) => state.FileReducer);
	const { status, deletedFile } = useAppSelector(
		(state) => state.deleteFileReducer
	);
	const deleteNot = (deletedFile: string) => {
		messageApi.open({
			key: "deleteNot",
			type: "loading",
			content: "Deleting...",
			duration: 0,
		});
	};

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

	return <>{contextHolder}</>;
};
