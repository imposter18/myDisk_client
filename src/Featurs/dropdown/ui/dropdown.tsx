import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import * as styles from "./dropdown.module.scss";
import { LogoutBtn } from "@/Entities/logoutBtn";

export const Dropdown = ({ userName }: any) => {
	const dispatch = useAppDispatch();
	const ref = useRef();
	const [open, setOpen] = useState(false);

	const hoverItem = () => {
		return setOpen(true);
	};
	const leaveItem = () => {
		return setOpen(false);
	};

	return (
		<>
			<div
				className={styles.userName}
				onMouseEnter={hoverItem}
				onMouseLeave={leaveItem}
				ref={ref}
			>
				{userName}
				{open && (
					<div className={styles.popup}>
						<LogoutBtn className={styles.popupItem}></LogoutBtn>
					</div>
				)}
			</div>
		</>
	);
};
