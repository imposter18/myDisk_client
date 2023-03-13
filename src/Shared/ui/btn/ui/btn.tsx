import React, { useState } from "react";
import * as styles from "./btn.module.scss";

interface Iprops {
	className?: string;
	content?: string;
	onClick?: () => void;
	children?: any;
}

export const CastomBtn = ({
	className,
	content,
	onClick,
	children,
}: Iprops) => {
	const [click, setClick] = useState(false);

	const btnClick = () => {
		setClick(true);
		setTimeout(function () {
			setClick(false);
		}, 400);
	};
	return (
		<div onClick={onClick}>
			<div
				onClick={btnClick}
				className={`${className} ${click ? styles.click : ""} ${styles.btn}`}
			>
				{content}
				{children}
			</div>
		</div>
	);
};
