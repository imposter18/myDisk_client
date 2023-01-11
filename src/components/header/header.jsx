import React from "react";
import styles from "./header.m.scss";
import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Row className={styles.row} align="middle">
					<Col className={styles.logo} span={8} push={1}>
						<i className="bi bi-disc-fill"></i>
						<h2>My disk</h2>
					</Col>
					<Col className={styles.buttonBlock} span={16}>
						<Button className={styles.button} type="link" size={"large"}>
							Вход
							<Link to={"/"}></Link>
						</Button>
						<Button className={styles.button} type="link" size={"large"}>
							Авторизация
						</Button>
					</Col>
				</Row>
			</div>
		</header>
	);
};

export default Header;
