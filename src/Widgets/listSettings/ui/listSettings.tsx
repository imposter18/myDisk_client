import { SortFileList } from "@/Featurs/sortFileList";
import { ViewFileList } from "@/Featurs/viewFileList";
import React from "react";
import * as styles from "./listSettings.module.scss";

export const ListSettings = () => {
	return (
		<div className={styles.listSettings}>
			<SortFileList></SortFileList>
			<ViewFileList></ViewFileList>
		</div>
	);
};
