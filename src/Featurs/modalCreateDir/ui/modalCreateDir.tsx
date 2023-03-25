import React, { useEffect, useState } from "react";
import * as styles from "./modalCreateDir.module.scss";
import { CreateDirThunk } from "@/Entities/file/model/thunk/CreateDirThunk";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { Button, Form, Input } from "antd";
import { Modal } from "@/Shared/ui/modal";
import { useParams } from "react-router-dom";
import { setVisibleNotCreateDir } from "../modal/store/createDirReducer";

interface props {
	isComponentVisible: boolean;
	setIsComponentVisible: (arg: boolean) => void;
}

export const ModalCreateDir = React.memo(
	({ isComponentVisible, setIsComponentVisible }: props) => {
		const params = useParams();
		const [createError, setCreateError] = useState(false);

		const { createDirError, isLoadingCreateDir } = useAppSelector(
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
			dispatch(
				CreateDirThunk({ currentDir: params.folderId, name: folderName, type })
			).then((res) => {
				if (res.meta.requestStatus === "fulfilled") {
					dispatch(setVisibleNotCreateDir(folderName));
					setIsComponentVisible(false);
					setCreateError(false);
				}
				if (res.meta.requestStatus === "rejected") {
					setCreateError(true);
				}
			});
		}
		const onClose = () => {
			setIsComponentVisible(false);
		};

		return (
			<>
				<Modal visible={isComponentVisible} onClose={setIsComponentVisible}>
					<div className={styles.header}>
						<div className={styles.title}>Create a new folder</div>
						<button onClick={onClose} className={styles.closeBtn}>
							<i className="bi bi-x"></i>
						</button>
					</div>

					<Form
						className={styles.form}
						name="basic"
						style={{ maxWidth: 600 }}
						onFinish={onFinish}
						autoComplete="off"
						initialValues={{ folderName: "New folder" }}
					>
						<Form.Item name="folderName">
							<Input autoFocus />
						</Form.Item>
						{createError && (
							<span className={styles.error}>
								{createDirError.message ? createDirError.message : ""}
							</span>
						)}
						{isLoadingCreateDir ? (
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
			</>
		);
	}
);
