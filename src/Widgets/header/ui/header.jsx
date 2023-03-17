import React, { useRef } from "react";
import * as styles from "./header.module.scss";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Toggle } from "@/Featurs/themeToggle";
import { useAppSelector, useAppDispatch } from "@/Shared/lib/hooks/redux";
import { logoutUser } from "@/Entities/viewer/model/thunks/logoutUser";
import { DropdownUserInfo } from "@/Featurs/dropdown";
import { useViewer, useViewerIsAuth } from "@/Entities/viewer";
import { LogoutBtn } from "@/Featurs/logoutBtn";
import { SearchFiles } from "@/Featurs/searchFiles";
import logo from "@/Shared/assets/img/logo/cloudLogo.svg";
import logoutIcon from "@/Shared/assets/img/any/logout.svg";
export const Header = memo(() => {
	const ref = useRef();
	// const { isAuth } = useAppSelector((state) => state.userReducer);
	// const { userName } = useAppSelector((state) => state.userReducer.currentUser);
	const isAuth = useViewerIsAuth();
	const user = useViewer();
	const dispatch = useAppDispatch();
	const logout = () => {
		dispatch(logoutUser());
	};

	return (
		<header className={styles.header}>
			<div className={styles.headerContent} align="middle">
				<div className={styles.leftBlock}>
					<div className={styles.logo}>
						{/* <i className="bi bi-disc-fill"></i> */}
						<img src={logo} alt="logo" />
						<h2 className={styles.name}>My Cloud</h2>
					</div>
					{isAuth && <SearchFiles></SearchFiles>}
				</div>

				<div className={styles.rightBlock}>
					<Toggle></Toggle>
					{isAuth ? (
						<DropdownUserInfo user={user}>
							<LogoutBtn className={styles.logoutBtn}>
								<img src={logoutIcon} alt="logoutIcon" />
								<span>Logout</span>
							</LogoutBtn>
							<div className={styles.themeItem}>
								<span>Theme:</span>
							</div>
						</DropdownUserInfo>
					) : (
						<BtnBlock></BtnBlock>
					)}
				</div>
			</div>
		</header>
	);
});
const BtnBlock = () => {
	return (
		<>
			<Link to={"/auth"}>
				<Button
					className={`${styles.buttonSignIn} ${styles.button}`}
					type="link"
					size={"large"}
				>
					Sign in
				</Button>
			</Link>
			<Link className={styles.linkSingUp} to={"/registration"}>
				<Button
					className={`${styles.buttonSignUp} ${styles.button}`}
					size={"large"}
				>
					Sign up
				</Button>
			</Link>
		</>
	);
};
