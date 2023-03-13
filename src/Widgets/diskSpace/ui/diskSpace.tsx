import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { Progress } from "antd";
import React, { useEffect } from "react";
import * as styles from "./diskSpace.module.scss";
import { sizeFormat } from "@/Shared/lib/helpers/sizeFormat";
import { getUserSpaceThunk } from "@/Entities/viewer";

export const DiskSpace = () => {
	const { diskSpace, usedSpace } = useAppSelector(
		(state) => state.userReducer.currentUser
	);
	const { files } = useAppSelector((state) => state.FileReducer);
	const dispatch = useAppDispatch();
	const getUsedPercent = (used: number, space: number) => {
		return (used / space) * 100;
	};

	useEffect(() => {
		dispatch(getUserSpaceThunk());
	}, [files.length]);

	return (
		<>
			<div className={styles.diskSpace}>
				<div className={styles.progress}>
					<Progress
						percent={getUsedPercent(usedSpace, diskSpace)}
						// percent={70}
						showInfo={false}
						strokeColor={"#fff"}
					></Progress>
				</div>
				<div className={styles.space}>
					{`${sizeFormat(usedSpace)} of ${sizeFormat(diskSpace)}`}
				</div>
			</div>
		</>
	);
};
