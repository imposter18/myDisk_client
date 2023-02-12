import React, { useEffect, useLayoutEffect } from "react";
import { Button, message, Space } from "antd";

interface props {
	messageProps: string;
	typeProps?: "info" | "success" | "error" | "warning" | "loading";
}

export const PopupForStatus = ({
	messageProps,
	typeProps = "success",
}: props) => {
	const [messageApi, contextHolder] = message.useMessage();

	const success = () => {
		messageApi.open({
			type: typeProps,
			content: messageProps,
		});
	};
	useLayoutEffect(() => {
		success();
	}, [name]);

	return <>{contextHolder}</>;
};
