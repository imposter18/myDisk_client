import React, { useEffect, useState } from "react";
import * as styles from "./sortFileList.module.scss";
import { CastomBtn } from "@/Shared/ui/btn";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { setDerection, setSort } from "../model";
import { ISortItem } from "../model/types/types";

const sortParams = [
	{
		title: "Name",
		content: "name",
		id: 1,
	},
	{
		title: "Size",
		content: "size",
		id: 2,
	},
	{
		title: "Type",
		content: "type",
		id: 3,
	},
	{
		title: "Date",
		content: "date",
		id: 4,
	},
];

const sortDerection = [
	{
		title: "Ascending",
		content: "asc",
		id: 5,
	},
	{
		title: "Descending",
		content: "desc",
		id: 6,
	},
];

export const SortFileList = React.memo(() => {
	const dispatch = useAppDispatch();
	const { sort, derection } = useAppSelector((state) => state.sortFileReducer);
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible();

	const popupVisible = () => {
		setIsComponentVisible((prev) => !prev);
	};
	useEffect(() => {
		dispatch;
	}, [sort]);
	const sortDerectionMemo = React.useMemo(() => sortDerection, []);
	const sortParamsMemo = React.useMemo(() => sortParams, []);
	const sortUpdateHandler = (item: ISortItem) => {
		dispatch(setSort(item.content));
	};
	const derectionUpdateHandler = (item: ISortItem) => {
		dispatch(setDerection(item.content));
	};
	return (
		<>
			<div ref={ref} className={styles.sortFileList}>
				<div>
					<CastomBtn onClick={popupVisible} className={styles.btn}>
						<span
							className={` ${
								derection === "desc" ? styles.sortLogoDesc : styles.sortLogoAsc
							}`}
						></span>
						<span className={styles.sortTitle}>
							{sortParamsMemo.find((item) => item.content === sort).title}
						</span>
						<span
							className={`${
								isComponentVisible ? styles.imgArrowRotateDown : styles.imgArrow
							}`}
						></span>
					</CastomBtn>
				</div>
				{isComponentVisible && (
					<div onClick={popupVisible} className={styles.sortPopup}>
						<div className={styles.popupContent}>
							<div className={styles.topBlock}>
								{sortParamsMemo.map((item) => {
									return (
										<div
											key={item.id}
											onClick={() => sortUpdateHandler(item)}
											className={`${styles.popupItem} ${
												sort == item.content ? styles.sortActive : ""
											}`}
										>
											<span></span>
											{item.title}
										</div>
									);
								})}
							</div>
							<div className={styles.outline}></div>
							<div className={styles.bottomblock}>
								{sortDerectionMemo.map((item) => {
									return (
										<div
											key={item.id}
											className={`${styles.popupItem} ${
												derection == item.content ? styles.sortActive : ""
											}`}
											onClick={() => derectionUpdateHandler(item)}
										>
											<span></span>
											{item.title}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
});
