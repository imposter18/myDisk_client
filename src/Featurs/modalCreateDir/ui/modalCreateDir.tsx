import { CreateDir } from "@/Featurs/modalCreateDir/model/thunk/CreateDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form, Input } from "antd";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { setVisible } from "../model/store/popupSlice";
import * as styles from "./modalCreateDir.module.scss";
import { Modal } from "@/Shared/ui/modal";
import { PopupForStatus } from "@/Shared/ui/popupForStatus";

export const ModalCreateDir = () => {
	const [createError, setCreateError] = useState(false);
	const [folderName, setFolderName] = useState<string>("");
	const [visiblePopup, setVisiblePopup] = useState(false);
	const { visible } = useAppSelector((state) => state.VisiblePopupReducer);
	const { currentDir, error, isLoaging } = useAppSelector(
		(state) => state.FileReducer
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		let timer: any;
		if (createError) {
			timer = setTimeout(() => {
				setCreateError(false);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [createError]);
	function onFinish({ folderName }: { folderName: string }): void {
		const type = "dir";
		dispatch(CreateDir({ currentDir, name: folderName, type })).then((res) => {
			if (res.meta.requestStatus === "fulfilled") {
				setFolderName(folderName);
				setVisiblePopup(true);
				dispatch(setVisible(false));
				setCreateError(false);
			}
			if (res.meta.requestStatus === "rejected") {
				setCreateError(true);
			}
		});
	}
	const onClose = () => {
		dispatch(setVisible(false));
	};

	return (
		<>
			{visible && (
				<Modal onClose={onClose}>
					<div className={styles.header}>
						<div className={styles.title}>Create a new folder</div>
						<button onClick={onClose} className={styles.btn}>
							<i className="bi bi-x"></i>
						</button>
					</div>

					<Form
						className={styles.form}
						name="basic"
						style={{ maxWidth: 600 }}
						onFinish={onFinish}
						// onFinishFailed={onFinishFailed}
						autoComplete="off"
						initialValues={{ folderName: "New folder" }}
					>
						<Form.Item name="folderName">
							<Input />
						</Form.Item>
						{createError && <span className={styles.error}>{error}</span>}
						{isLoaging ? (
							<Button type="primary" loading>
								Loading
							</Button>
						) : (
							<Button type="primary" htmlType="submit">
								Create
							</Button>
						)}
					</Form>
				</Modal>
			)}
			{visiblePopup && <PopupForStatus name={folderName}></PopupForStatus>}
		</>
	);
};
