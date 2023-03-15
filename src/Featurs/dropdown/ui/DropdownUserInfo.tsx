import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import * as styles from "./dropdown.module.scss";
import userAvatar from "@/Shared/assets/img/any/userAvatar.svg";

export const DropdownUserInfo = ({ user, children }: any) => {
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
				<img className={styles.userAvatar} src={userAvatar} alt="userAvatar" />
				{open && (
					<div className={styles.popup}>
						<div className={styles.header}>
							<span>{user.email}</span>
							<img
								className={styles.userAvatar}
								src={userAvatar}
								alt="userAvatar"
							/>
							{/* <span className={styles.placeholder}> </span> */}
						</div>
						<div className={styles.content}>{StyledChildren()}</div>
					</div>
				)}
			</div>
		</>
	);
};
