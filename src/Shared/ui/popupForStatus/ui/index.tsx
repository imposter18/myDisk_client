import React, { useEffect, useLayoutEffect, useMemo } from "react";

import { Divider, notification } from "antd";

interface props {
	folName: string;
}

export const PopupForStatus = ({ folName }: props) => {
	const [api, contextHolder] = notification.useNotification();

	const openNotification = (placement: any) => {
		api.info({
			message: `Success`,
			description: `Folder ${folName} was created`,
			placement,
			duration: 0,
		});
	};
	useLayoutEffect(() => {
		openNotification("bottomLeft");
	}, [folName]);
	const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
	return <>{contextHolder}</>;
};
