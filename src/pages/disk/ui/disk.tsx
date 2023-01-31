import React, { useEffect } from "react";
import * as styles from "./disk.module.scss";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../Shared/lib/hooks/redux";
import { getFiles } from "../models/thunk/getFile";
import { FileList } from "./fileList/fileList";
import { CreateDir } from "../models/thunk/CreateDir";
import { Popup } from "@/Entities/popup";
import { setVisible } from "@/Entities/popup/model/store/popupSlice";

export const DiskPage = () => {
	const dispatch = useAppDispatch();
	const { currentDir } = useAppSelector((state) => state.FileReducer);

	useEffect(() => {
		dispatch(getFiles(currentDir));
	}, [currentDir]);

	const createStaticHandler = () => {
		dispatch(setVisible(true));
		// const name = "sdfsd";
		// const type = "dir";
		// // const a = null;
		// dispatch(CreateDir({ currentDir: a, name, type }));
	};

	return (
		<>
			<div className={styles.btnBlock}>
				<button>назад</button>
				<button onClick={() => createStaticHandler()}>создать папку</button>
			</div>
			<FileList></FileList>
			<Popup></Popup>
		</>
	);
};
