import React from "react";
import * as styles from "./signForm.module.scss";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";

const SignForm = ({ children }) => {
	return (
		<div className={styles.registration}>
			<div className={styles.form}>{children}</div>
		</div>
	);
};

export default SignForm;
