import React, { useEffect } from "react";
import * as styles from "./disk.module.scss";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../Shared/lib/hooks/redux";
import { getFiles } from "../models/thunk/getFile";
import { FileList } from "./fileList/fileList";

export const DiskPage = () => {
	const dispatch = useAppDispatch();
	const { carrentDir } = useAppSelector((state) => state.FileReducer);

	useEffect(() => {
		dispatch(getFiles(carrentDir));
	}, [carrentDir]);

	return (
		<>
			<div className={styles.btnBlock}>
				<button>назад</button>
				<button>создать папку</button>
			</div>
			<FileList></FileList>
		</>
	);
};
