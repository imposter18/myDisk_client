import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { Progress } from "antd";
import React, { useCallback, useEffect, useMemo } from "react";
import * as styles from "./diskSpace.module.scss";
import { sizeFormat } from "@/Shared/lib/helpers/sizeFormat";
import { getUserSpaceThunk } from "@/Entities/viewer";

export const DiskSpace = React.memo(() => {
	const diskSpace = useAppSelector(
		(state) => state.userReducer.currentUser.diskSpace
	);
	const usedSpace = useAppSelector(
		(state) => state.userReducer.currentUser.usedSpace
	);

	const { files } = useAppSelector((state) => state.FileReducer);
	const dispatch = useAppDispatch();
	const getUsedPercent = React.useMemo(
		() => (used: number, space: number) => {
			return (used / space) * 100;
		},
		[diskSpace, usedSpace]
	);
	const sizeFormatMemoUsed = useMemo(() => sizeFormat(usedSpace), [usedSpace]);
	const sizeFormatMemoSpace = useMemo(() => sizeFormat(diskSpace), [diskSpace]);
	useEffect(() => {
		dispatch(getUserSpaceThunk());
	}, [files.length]);

	return (
		<>
			<div className={styles.diskSpace}>
				<div className={styles.progress}>
					<Progress
						percent={getUsedPercent(usedSpace, diskSpace)}
						showInfo={false}
						strokeColor={"#fff"}
					></Progress>
				</div>
				<div className={styles.space}>
					{`${sizeFormatMemoUsed} of ${sizeFormatMemoSpace}`}
				</div>
			</div>
		</>
	);
});
