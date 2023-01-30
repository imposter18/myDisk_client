import React from "react";
import { Button } from "antd";
import * as styles from "./logout.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { logoutUser } from "../model/thunks/AT-logoutUser";

export const LogoutBtn = () => {
	const dispatch = useAppDispatch();
	const logout = () => {
		dispatch(logoutUser());
	};

	return (
		<Button
			onClick={logout}
			className={` ${styles.button}`}
			type="link"
			size={"large"}
		>
			logout
		</Button>
	);
};
