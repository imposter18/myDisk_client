import { CreateDir } from "@/Entities/popup/model/thunk/CreateDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form, Input } from "antd";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { setVisible } from "../model/store/popupSlice";
import * as styles from "./popup.module.scss";

export const Popup = () => {
	const [createError, setCreateError] = useState(false);
	const { visible } = useAppSelector((state) => state.VisiblePopupReducer);
	const { currentDir, error, isLoaging } = useAppSelector(
		(state) => state.FileReducer
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (createError) {
			setTimeout(() => {
				setCreateError(false);
				console.log(error);
			}, 2000);
		}
	}, [createError]);
	// console.log(createError);
	function onFinish({ folderName }: any): void {
		const type = "dir";
		dispatch(CreateDir({ currentDir, name: folderName, type })).then((res) => {
			if (res.meta.requestStatus === "fulfilled") {
				dispatch(setVisible(false));
				setCreateError(false);
			}
			if (res.meta.requestStatus === "rejected") {
				setCreateError(true);
			}
		});
	}
	const click = () => {
		dispatch(setVisible(false));
	};

	return (
		<>
			{visible && (
				<div onClick={() => click()} className={styles.popup}>
					<div onClick={(e) => e.stopPropagation()} className={styles.content}>
						<div className={styles.header}>
							<div className={styles.title}>Create a new folder</div>
							<button onClick={click} className={styles.btn}>
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
					</div>
				</div>
			)}
		</>
	);
};
