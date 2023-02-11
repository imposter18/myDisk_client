import React, { useEffect, useState } from "react";
import * as styles from "./disk.module.scss";
import { FileList } from "@/Widgets/fileList";
import { CreateDir } from "@/Widgets/createDir";
import { useAppSelector } from "@/Shared/lib/hooks/redux";
import { AlertEmail } from "@/Widgets/alertEmail";

export const DiskPage = () => {
	const [visibleModal, setVisibleModal] = useState(false);
	const user = useAppSelector((state) => state.userReducer.currentUser);

	return (
		<>
			<div className={styles.wrapper}>
				<AlertEmail user={user}></AlertEmail>
				<div className={styles.btnBlock}>
					<button>назад</button>
					<button onClick={() => setVisibleModal(true)}>создать папку</button>
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
