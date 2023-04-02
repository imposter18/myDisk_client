import { useAppSelector } from "@/Shared/lib/hooks/redux";
import { Stack } from "@/Widgets/DirStack";
import { ListSettings } from "@/Widgets/listSettings";
import React from "react";
import * as styles from "./rightBlock.module.scss";
import { FileList } from "@/Widgets/fileList";

export const RightDiskBlock = () => {
	const { searchValue } = useAppSelector((state) => state.searchFilesReducer);
	return (
		<>
			<div
				onContextMenu={(event) => {
					event.preventDefault();
					event.stopPropagation();
				}}
				className={styles.rightBlock}
			>
				<div className={styles.topMenu}>
					{searchValue ? (
						<h2 className={styles.searchTitle}>Search</h2>
					) : (
						<Stack></Stack>
					)}
					{!searchValue && <ListSettings></ListSettings>}
				</div>

				<FileList></FileList>
				<a
					target="_blank"
					href="https://github.com/imposter18/myDisk_client"
					className={styles.footerLinks}
				>
					<i className="bi bi-github"></i>
					GitHub
				</a>
			</div>
		</>
	);
};
