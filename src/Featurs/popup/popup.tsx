import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import * as styles from "./popup.module.scss";
import { logoutUser } from "@/Shared/store/reducers/authUser/AT-logoutUser";

const Popup = ({ userName }: any) => {
	const dispatch = useAppDispatch();
	const ref = useRef();
	const [open, setOpen] = useState(false);
	const logout = () => {
		dispatch(logoutUser());
	};

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
				// className={}
				ref={ref}
			>
				{userName}
				{open && (
					<div className={styles.popup}>
						<Button
							onClick={logout}
							className={` ${styles.button}`}
							type="link"
							size={"large"}
						>
							logout
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default Popup;
