import { renameFileThunk } from "@/Entities/file/model/thunk/renameFileThunk";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { Modal } from "@/Shared/ui/modal";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import * as styles from "./modalRenameFile.module.scss";

interface IProps {
	isComponentVisible: boolean;
	setIsComponentVisible: (arg: boolean) => void;
	file: IFileResponse;
}

export const ModalRenameFile = ({
	file,
	isComponentVisible,
	setIsComponentVisible,
}: IProps) => {
	const dispatch = useAppDispatch();
	const { isLoadingRename, renameError } = useAppSelector(
		(state) => state.FileReducer
	);
	const onFinish = ({ renameInput }: { renameInput: string }) => {
		console.log(renameInput, "renameInput");
		console.log(file._id, " file._id");
		dispatch(renameFileThunk({ newName: renameInput, id: file._id })).then(
			(res) => {
				if (res.meta.requestStatus === "fulfilled") {
					setIsComponentVisible(false);
				}
				if (res.meta.requestStatus === "rejected") {
				}
			}
		);
	};

	const onClose = () => {
		setIsComponentVisible(false);
	};
	return (
		<>
			<Modal onClose={onClose} visible={isComponentVisible}>
				<div className={styles.header}>
					<div className={styles.title}>Rename</div>
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
					initialValues={{ renameInput: `${file.name}` }}
				>
					<Form.Item name="renameInput">
						<Input autoFocus />
					</Form.Item>
					{renameError && (
						<span className={styles.error}>{renameError.message}</span>
					)}
					{isLoadingRename ? (
						<Button type="primary" loading>
							Loading
						</Button>
					) : (
						<Button type="primary" htmlType="submit">
							Rename
						</Button>
					)}
				</Form>
			</Modal>
		</>
	);
};
