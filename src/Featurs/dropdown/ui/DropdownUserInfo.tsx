import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import * as styles from "./dropdown.module.scss";
import userAvatar from "@/Shared/assets/img/any/userAvatar.svg";
import userAvatarWhite from "@/Shared/assets/img/any/userAvatarWhite.svg";
import { IUser } from "@/Shared/Types/IUser";

interface IProps {
	user: IUser;
	children: JSX.Element;
}

export const DropdownUserInfo = ({ user, children }: IProps) => {
	const ref = useRef();
	const [open, setOpen] = useState(false);
	const { theme } = useAppSelector((state) => state.themeReducer);

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
				<img
					className={styles.userAvatar}
					src={theme === "light" ? userAvatar : userAvatarWhite}
					alt="userAvatar"
				/>
				{open && (
					<div className={styles.popup}>
						<div className={styles.header}>
							<span>{user.email}</span>
							<img
								className={styles.userAvatar}
								src={theme === "light" ? userAvatar : userAvatarWhite}
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
