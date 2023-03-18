import React, { ReactNode, useEffect } from "react";
import * as styles from "./signForm.module.scss";
import { useAppSelector } from "@/Shared/lib/hooks/redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";

type IProps = {
	children: JSX.Element;
};
export const SignForm = ({ children }: IProps) => {
	const navigate = useNavigate();
	const { isAuth, isLoaging } = useAppSelector((state) => state.userReducer);
	const { userName } = useAppSelector((state) => state.userReducer.currentUser);
	useEffect(() => {
		if (isAuth && userName) {
			navigate(`/${userName}`);
		}
	}, [isAuth]);
	return (
		<div className={styles.registration}>
			<div className={styles.form}>{children}</div>
		</div>
	);
};
