import { CreateDir } from "@/Entities/file/model/thunk/CreateDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import * as styles from "./modalCreateDir.module.scss";
import { Modal } from "@/Shared/ui/modal";

interface props {
	setFolderName: (folderName: string) => void;
	setVisiblePopup: (setVisiblePopup: boolean) => void;
	setVisibleModal: (setVisibleModal: boolean) => void;
	visibleModal: boolean;
}

export const ModalCreateDir = ({
	setVisiblePopup,
	setFolderName,
	visibleModal,
	setVisibleModal,
}: props) => {
	const [createError, setCreateError] = useState(false);

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
				setVisibleModal(false);
				setCreateError(false);
			}
			if (res.meta.requestStatus === "rejected") {
				setCreateError(true);
			}
		});
	}
	const onClose = () => {
		setVisibleModal(false);
	};

	return (
		<>
			{visibleModal && (
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
		</>
	);
};
