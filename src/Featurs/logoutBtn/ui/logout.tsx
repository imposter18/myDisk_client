import React from "react";
import { Button } from "antd";
import * as styles from "./logout.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { logoutUser } from "@/Entities/viewer";
import { clearFileStore } from "@/Entities/file";
import { clearCreateDirSrore } from "@/Featurs/modalCreateDir";
import { clearUploader } from "@/Widgets/uploader";
import { clearSearchStore } from "@/Featurs/searchFiles";
import { clearRenameState } from "@/Featurs/modalRenameFile";
import { clearDeleteStore } from "@/Featurs/deleteFileBtn";

interface IProps {
	className: string;
	children: JSX.Element | JSX.Element[];
}

export const LogoutBtn = ({ children, className }: IProps) => {
	const dispatch = useAppDispatch();
	const logout = () => {
		dispatch(logoutUser()).then((response) => {
			if (response.meta.requestStatus === "fulfilled") {
				dispatch(clearFileStore());
				dispatch(clearCreateDirSrore());
				dispatch(clearUploader());
				dispatch(clearSearchStore());
				dispatch(clearRenameState());
				dispatch(clearDeleteStore());
			}
		});
	};
	console.log();
	return (
		<button onClick={logout} className={` ${styles.button} ${className}`}>
			{children}
		</button>
	);
};
