import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import * as styles from "./dropdown.module.scss";

export const Dropdown = ({ userName, children }: any) => {
	const dispatch = useAppDispatch();
	const ref = useRef();
	const [open, setOpen] = useState(false);

	const hoverItem = () => {
		return setOpen(true);
	};
	const leaveItem = () => {
		return setOpen(false);
	};
	const StyledChildren = () =>
		React.Children.map(children, (child) =>
			React.cloneElement(child, {
				className: `${child.props.className} ${styles.popupItem}`,
			})
		);

	return (
		<>
			<div
				className={styles.userName}
				onMouseEnter={hoverItem}
				onMouseLeave={leaveItem}
				ref={ref}
			>
				{userName}
				{open && <div className={styles.popup}>{StyledChildren()}</div>}
			</div>
		</>
	);
};
