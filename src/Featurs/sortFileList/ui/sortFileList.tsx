import { CastomBtn } from "@/Shared/ui/btn";
import React, { useEffect, useState } from "react";
import * as styles from "./sortFileList.module.scss";
import sortDesc from "@/Shared/assets/img/any/sortDesc.svg";
import arrowTop from "@/Shared/assets/img/any/arrowTop.svg";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { setDerection, setSort } from "../model";

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

export const SortFileList = () => {
	const dispatch = useAppDispatch();
	// const [sort, setSort] = useState({
	// 	sort: "date",
	// 	derection: "asc",
	// });
	const { sort, derection } = useAppSelector((state) => state.sortFileReducer);
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible();

	const popupVisible = () => {
		setIsComponentVisible((prev) => !prev);
	};
	useEffect(() => {
		dispatch;
	}, [sort]);

	const sortUpdateHandler = (item: any) => {
		dispatch(setSort(item.content));
	};
	const derectionUpdateHandler = (item: any) => {
		dispatch(setDerection(item.content));
	};
	return (
		<>
			<div ref={ref} className={styles.sortFileList}>
				<div>
					<CastomBtn onClick={popupVisible} className={styles.btn}>
						<img
							src={sortDesc}
							className={`${styles.sortLogo} ${
								derection === "desc" ? styles.sortLogoAsc : null
							}`}
							alt="sortDesc"
						/>
						<span className={styles.sortTitle}>
							{sortParams.find((item) => item.content === sort).title}
						</span>
						<img
							src={arrowTop}
							className={`${isComponentVisible ? styles.arrowRotateDown : ""} 
							${styles.img}	
							`}
							alt="sortDesc"
						/>
					</CastomBtn>
				</div>
				{isComponentVisible && (
					<div onClick={popupVisible} className={styles.sortPopup}>
						<div className={styles.popupContent}>
							<div className={styles.topBlock}>
								{sortParams.map((item) => {
									return (
										<div
											key={item.id}
											// onClick={() =>
											// 	setSort((prevState) => ({
											// 		sort: item.content,
											// 		derection: prevState.derection,
											// 	}))
											// }
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
								{sortDerection.map((item) => {
									return (
										<div
											key={item.id}
											className={`${styles.popupItem} ${
												derection == item.content ? styles.sortActive : ""
											}`}
											// onClick={() =>
											// 	setSort((prevState) => ({
											// 		sort: prevState.sort,
											// 		derection: item.content,
											// 	}))
											// }
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
};
