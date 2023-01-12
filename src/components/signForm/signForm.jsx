import React from "react";
import styles from "./signForm.m.scss";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";

const SignForm = ({ children }) => {
	return (
		<div className={styles.registration}>
			<div className={styles.form}>{children}</div>
		</div>
	);
};

export default SignForm;
