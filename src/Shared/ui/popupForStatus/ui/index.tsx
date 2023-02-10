import React, { useEffect, useLayoutEffect } from "react";
import { Button, message, Space } from "antd";

interface props {
	name: string;
}

export const PopupForStatus = ({ name }: props) => {
	const [messageApi, contextHolder] = message.useMessage();
	console.log("render");

	const success = () => {
		messageApi.open({
			type: "success",
			content: `File "${name}" has created`,
		});
	};
	useLayoutEffect(() => {
		console.log("renderEFFECT");
		success();
	}, [name]);

	return <>{contextHolder}</>;
};
