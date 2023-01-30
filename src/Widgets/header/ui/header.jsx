import React, { useRef } from "react";
import * as styles from "./header.module.scss";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { memo } from "react";
import { Toggle } from "@/Featurs/themeToggle";
import { ThemeContext, themes } from "@/Shared/theme/ThemeContext.js";
import { useAppSelector, useAppDispatch } from "@/Shared/lib/hooks/redux";
import { logoutUser } from "@/Entities/logoutBtn/model/thunks/AT-logoutUser";
import { Popup } from "@/Featurs/popup";
export const Header = memo(() => {
	const ref = useRef();
	const { isAuth } = useAppSelector((state) => state.userReducer);
	const { userName } = useAppSelector((state) => state.userReducer.currentUser);
	const dispatch = useAppDispatch();
	const logout = () => {
		dispatch(logoutUser());
	};
	const btnBlock = () => {
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

	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Row className={styles.row} align="middle">
					<Col className={styles.logo} span={16} push={1}>
						<i className="bi bi-disc-fill"></i>
						<h2>MyCloud</h2>
					</Col>

					<Col className={styles.buttonBlock} span={8}>
						<ThemeContext.Consumer>
							{({ theme, setTheme }) => (
								<Toggle
									onChange={() => {
										if (theme === themes.light) setTheme(themes.dark);
										if (theme === themes.dark) setTheme(themes.light);
									}}
									value={theme === themes.dark}
								/>
							)}
						</ThemeContext.Consumer>
						{isAuth ? <Popup userName={userName} /> : btnBlock()}
					</Col>
				</Row>
			</div>
		</header>
	);
});
