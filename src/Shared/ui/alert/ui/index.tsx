import { Alert, Col, Row, Space } from "antd";
import React from "react";
import * as styles from "./alertDiaog.module.scss";

// const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
// 	console.log(e, "I was closed.");
// };
interface props {
	message: string;
}

export const AlertDialog = ({ message }: props) => {
	return (
		<Row justify="center" className={styles.wrapper}>
			<Col span={18}>
				<Alert
					message={message}
					type="warning"
					closable
					// onClose={onClose}
				/>
			</Col>
		</Row>
	);
};
