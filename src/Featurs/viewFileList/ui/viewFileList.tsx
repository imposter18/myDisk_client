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
import { ListIconSvg } from "@/Shared/assets/img/FileViewIcons/list";
import { GridMiddleIconSvg } from "@/Shared/assets/img/FileViewIcons/gridMiddle";
import { GridLargeIconSvg } from "@/Shared/assets/img/FileViewIcons/gridLarge";

const viewVariant = [
	{
		title: "List",
		icon: <ListIconSvg></ListIconSvg>,
	},
	{
		title: "Tiles",
		icon: <GridMiddleIconSvg></GridMiddleIconSvg>,
	},
	{
		title: "Large tiles",
		icon: <GridLargeIconSvg></GridLargeIconSvg>,
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
						<div className={styles.logo}>
							{viewVariant.find((item) => item.title === viewType).icon}
						</div>

						{/* <img
							src=
							className={styles.logo}
							alt="preview"
						/> */}
						{/* <img
							src={arrowTopIcon}
							className={`${styles.arrow} ${
								isComponentVisible ? styles.arrowRotete : null
							}`}
							alt="arrow"
						/> */}
						<span
							className={`${
								isComponentVisible ? styles.imgArrowRotateDown : styles.imgArrow
							}`}
						></span>
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
									<div className={styles.popupItemImg}>{item.icon}</div>

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
