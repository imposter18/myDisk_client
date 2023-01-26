import { Button } from "antd";
import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import * as styles from "./popup.module.scss";
import { logoutUser } from "../../store/reducers/authUser/AT-logoutUser";

const Popup = ({ userName }: any) => {
	const dispatch = useAppDispatch();
	const ref = useRef();
	const [open, setOpen] = useState(false);
	// const { userName } = useAppSelector((state) => state.userReducer.currentUser);
	const logout = () => {
		dispatch(logoutUser());
	};

	// React.useEffect(() => {
	// 	const handleClickOutside = (event: MouseEvent) => {
	// 		const _event = event as any;

	// 		if (ref.current && !_event.path.includes(ref.current)) {
	// 			setOpen(false);
	// 		}
	// 	};

	// 	document.addEventListener("click", handleClickOutside);

	// 	return () => document.removeEventListener("click", handleClickOutside);
	// }, []);
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
