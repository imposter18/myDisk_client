import { CastomBtn } from "@/Shared/ui/btn";
import React from "react";
import * as styles from "./viewFileList.module.scss";
import arrowTopIcon from "@/Shared/assets/img/any/arrowTop.svg";
import listIcon from "@/Shared/assets/img/FileViewIcons/list.svg";
import gridMiddleIcon from "@/Shared/assets/img/FileViewIcons/gridMiddle.svg";
import gridLargeIcon from "@/Shared/assets/img/FileViewIcons/gridLarge.svg";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { setView } from "../model";

const viewVariant = [
	{
		title: "List",
		icon: listIcon,
	},
	{
		title: "Tiles",
		icon: gridMiddleIcon,
	},
	{
		title: "Large tiles",
		icon: gridLargeIcon,
	},
];

export const ViewFileList = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible();
	const dispatch = useAppDispatch();
	const { view: viewType } = useAppSelector(
		(state) => state.viewFileListReducer
	);

	const changeViewHadler = (item: any) => {
		dispatch(setView(item.title));
	};
	const componentVisibleHandler = () => {
		setIsComponentVisible((prevState) => !prevState);
	};
	return (
		<>
			<div ref={ref} className={styles.viewFileList}>
				<div>
					<CastomBtn onClick={componentVisibleHandler} className={styles.btn}>
						<img
							src={viewVariant.find((item) => item.title === viewType).icon}
							className={styles.logo}
							alt="preview"
						/>
						<img
							src={arrowTopIcon}
							className={`${styles.arrow} ${
								isComponentVisible ? styles.arrowRotete : null
							}`}
							alt="arrow"
						/>
					</CastomBtn>
				</div>
				{isComponentVisible && (
					<div onClick={componentVisibleHandler} className={styles.viewPopup}>
						{viewVariant.map((item) => {
							return (
								<div
									onClick={() => changeViewHadler(item)}
									key={item.title}
									className={`${styles.popupItem} ${
										viewType === item.title ? styles.popupItemActive : null
									}`}
								>
									<img src={item.icon} className={styles.popupItemImg}></img>
									<span>{item.title}</span>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};
