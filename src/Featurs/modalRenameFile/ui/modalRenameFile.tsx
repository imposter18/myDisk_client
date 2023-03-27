import { renameFileThunk } from "@/Entities/file/model/thunk/renameFileThunk";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { IFileResponse } from "@/Shared/Types/response/IFileResponse";
import { Modal } from "@/Shared/ui/modal";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { setRenameFileRejected, setRenameFileSuccess } from "../model";
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
	const [createError, setCreateError] = useState(false);
	const dispatch = useAppDispatch();
	const { isLoadingRename, renameError } = useAppSelector(
		(state) => state.FileReducer
	);
	useEffect(() => {
		let timer: any;
		if (createError) {
			timer = setTimeout(() => {
				setCreateError(false);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [createError]);
	const onFinish = ({ renameInput }: { renameInput: string }) => {
		dispatch(renameFileThunk({ newName: renameInput, id: file._id })).then(
			(res) => {
				if (res.meta.requestStatus === "fulfilled") {
					setCreateError(false);
					setIsComponentVisible(false);
					dispatch(setRenameFileSuccess(file.name));
				}
				if (res.meta.requestStatus === "rejected") {
					setCreateError(true);
					dispatch(setRenameFileRejected(file.name));
				}
			}
		);
	};

	const onClose = (e: any) => {
		setIsComponentVisible(false);
	};
	return (
		<div className={styles.modalRenameWrapper}>
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
					<Form.Item className={styles.formItem} name="renameInput">
						<Input autoFocus />
					</Form.Item>
					{createError && (
						<span className={styles.error}>{renameError.message}</span>
					)}
					{isLoadingRename ? (
						<Button className={styles.btn} type="primary" loading>
							Loading
						</Button>
					) : (
						<Button className={styles.btn} type="primary" htmlType="submit">
							Rename
						</Button>
					)}
				</Form>
			</Modal>
		</div>
	);
};
