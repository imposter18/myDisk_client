import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import * as styles from "./loginForm.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import {
	loginUser,
	useViewerError,
	useViewerIsFirsLoadind,
} from "@/Entities/viewer";
import { useViewerIsLoadind } from "@/Entities/viewer";

export const LoginForm = () => {
	const [error, setError] = useState(false);
	const isLoaging = useViewerIsLoadind();
	const isFirstLoading = useViewerIsFirsLoadind();
	const errorMessage = useViewerError();
	const dispatch = useAppDispatch();
	const onFinish = (values: {
		Email: string;
		password: string;
		remember: boolean;
	}) => {
		const { Email, password, remember } = values;

		dispatch(loginUser({ email: Email, password })).then((res) => {
			if (res.meta.requestStatus === "fulfilled") setError(false);
			if (res.meta.requestStatus === "rejected") setError(true);
		});
	};

	return (
		<>
			<Form
				className={styles.form}
				name="basic"
				labelCol={{ span: 4 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				autoComplete="on"
			>
				<Form.Item
					label="Email"
					name="Email"
					rules={[{ required: true, message: "Please input your email!" }]}
				>
					<Input type="email" />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input.Password />
				</Form.Item>
				<Row>
					<Col span={12} push={1}>
						<Form.Item name="remember" valuePropName="checked">
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Col>
					<Col className={styles.confirmBtn} span={12}>
						<Form.Item>
							{isLoaging ? (
								<Button className={styles.button} type="primary" loading>
									Loading
								</Button>
							) : (
								<Button
									className={styles.button}
									type="primary"
									htmlType="submit"
								>
									Submit
								</Button>
							)}
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	);
};
