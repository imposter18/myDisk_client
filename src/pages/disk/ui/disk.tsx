import React, { useEffect, useState } from "react";
import * as styles from "./disk.module.scss";
import { FileList } from "@/Widgets/fileList";
import { CreateDir } from "@/Widgets/createDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { AlertEmail } from "@/Widgets/alertEmail";
import { useViewer } from "@/Entities/viewer";
import {
	popFromStack,
	setCurrentDir,
} from "@/Entities/file/model/store/fileSlice";
import { uploadFileThunk } from "@/Entities/file/model/thunk/uploadFileThunk";

export const DiskPage = () => {
	const [visibleModal, setVisibleModal] = useState(false);
	const { diskStack, currentDir } = useAppSelector(
		(state) => state.FileReducer
	);
	const dispatch = useAppDispatch();
	const user = useViewer();
	const backClickHandler = () => {
		dispatch(popFromStack());
		dispatch(setCurrentDir(diskStack[diskStack.length - 1]));
	};
	const fileuploadHandler = (event: any) => {
		const files = [...event.target.files];
		files.forEach((file) =>
			dispatch(uploadFileThunk({ file, dirId: currentDir }))
		);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<AlertEmail user={user}></AlertEmail>
				<div className={styles.btnBlock}>
					<button onClick={() => backClickHandler()}>назад</button>
					<button onClick={() => setVisibleModal(true)}>создать папку</button>
					<label className={styles.lable} htmlFor="upload">
						Upload files
					</label>
					<input
						multiple={true}
						onChange={(event) => fileuploadHandler(event)}
						className={styles.input}
						type="file"
						id="upload"
					></input>
				</div>
				<FileList></FileList>
				<CreateDir
					visibleModal={visibleModal}
					setVisibleModal={setVisibleModal}
				></CreateDir>
			</div>
		</>
	);
};
