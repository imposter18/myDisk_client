import { CreateDir } from "@/Entities/popup/model/thunk/CreateDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { setVisible } from "../model/store/popupSlice";
import * as styles from "./popup.module.scss";

export const Popup = () => {
	const { visible } = useAppSelector((state) => state.VisiblePopupReducer);
	const { currentDir } = useAppSelector((state) => state.FileReducer);
	const dispatch = useAppDispatch();
	function onFinish({ folderName }: any): void {
		const type = "dir";
		dispatch(CreateDir({ currentDir, name: folderName, type }));
	}
	const click = () => {
		dispatch(setVisible(false));
	};
	useEffect(() => {
		console.log(visible);
	}, [visible]);
	return (
		<>
			{visible && (
				<div className={styles.popup}>
					<div className={styles.content}>
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

							<Button type="primary" htmlType="submit">
								Create
							</Button>
						</Form>
					</div>
				</div>
			)}
		</>
	);
};
