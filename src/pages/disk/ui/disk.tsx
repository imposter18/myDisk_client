import React, { useEffect } from "react";
import * as styles from "./disk.module.scss";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../Shared/lib/hooks/redux";
import { getFiles } from "../../../Widgets/fileList/model/thunk/getFile";
import { FileList } from "@/Widgets/fileList";
import { ModalCreateDir } from "@/Featurs/modalCreateDir";
import { setVisible } from "@/Featurs/modalCreateDir";

export const DiskPage = () => {
	const dispatch = useAppDispatch();

	// const { currentDir } = useAppSelector((state) => state.FileReducer);

	// useEffect(() => {
	// 	dispatch(getFiles(currentDir));
	// }, [currentDir]);

	const createStaticHandler = () => {
		dispatch(setVisible(true));
	};

	return (
		<>
			<div className={styles.btnBlock}>
				<button>назад</button>
				<button onClick={() => createStaticHandler()}>создать папку</button>
			</div>
			<FileList></FileList>
			<ModalCreateDir></ModalCreateDir>
		</>
	);
};
