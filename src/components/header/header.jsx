import React from "react";
import * as styles from "./header.module.scss";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { memo } from "react";
const Header = memo(() => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Row className={styles.row} align="middle">
					<Col className={styles.logo} span={8} push={1}>
						<i className="bi bi-disc-fill"></i>
						<h2>My disk</h2>
					</Col>
					<Col className={styles.buttonBlock} span={16}>
						<Link to={"/auth"}>
							<Button className={styles.button} type="link" size={"large"}>
								Sign in
							</Button>
						</Link>
						<Link to={"/registration"}>
							<Button className={styles.button} size={"large"}>
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
