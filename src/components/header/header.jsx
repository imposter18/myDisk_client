import React from "react";
import * as styles from "./header.module.scss";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { memo } from "react";
import Toggle from "../themeToggle/themeToggle";
import { ThemeContext, themes } from "../theme/ThemeContext";
import classNames from "classnames";
const Header = memo(() => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Row className={styles.row} align="middle">
					<Col className={styles.logo} span={16} push={1}>
						<i className="bi bi-disc-fill"></i>
						<h2>My disk</h2>
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
					</Col>
				</Row>
			</div>
		</header>
	);
});

export default Header;
