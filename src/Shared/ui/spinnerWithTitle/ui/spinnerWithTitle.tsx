import { Spin } from "antd";
import React from "react";
import * as styles from "./spinnerWithTitle.module.scss";

interface IProps {
	title: string;
}

export const SpinnerWithTitle = ({ title }: IProps) => {
	return (
		<>
			<div className={styles.spinnerWrapper}>
				<Spin size="large"></Spin>
				<h3 className={styles.spinnerTitle}>{title}</h3>
			</div>
		</>
	);
};
