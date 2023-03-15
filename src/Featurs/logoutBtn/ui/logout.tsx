import React from "react";
import { Button } from "antd";
import * as styles from "./logout.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { logoutUser } from "@/Entities/viewer";

export const LogoutBtn = ({ children, className, ...props }: any) => {
	const dispatch = useAppDispatch();
	const logout = () => {
		dispatch(logoutUser());
	};
	console.log();
	return (
		<button onClick={logout} className={` ${styles.button} ${className}`}>
			{children}
		</button>
	);
};
