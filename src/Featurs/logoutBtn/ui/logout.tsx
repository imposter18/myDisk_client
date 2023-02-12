import React from "react";
import { Button } from "antd";
import * as styles from "./logout.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { logoutUser } from "@/Entities/viewer";

export const LogoutBtn = ({ ...props }) => {
	const dispatch = useAppDispatch();
	const logout = () => {
		dispatch(logoutUser());
	};
	console.log();
	return (
		<div {...props}>
			<Button
				onClick={logout}
				className={` ${styles.button}`}
				type="link"
				size={"large"}
				icon={<i className="bi bi-box-arrow-left"></i>}
			>
				logout
			</Button>
		</div>
	);
};
