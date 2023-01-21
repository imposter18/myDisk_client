import React from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import * as styles from "./loginForm.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { loginUser } from "../../store/reducers/AuthUserSlice";

const AuthForm = () => {
	const dispatch = useAppDispatch();
	const onFinish = (values: {
		Email: string;
		password: string;
		remember: boolean;
	}) => {
		console.log(values, "values");
		const { Email, password } = values;

		dispatch(loginUser({ email: Email, password }));
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<Form
				className={styles.form}
				name="basic"
				labelCol={{ span: 4 }}
				// wrapperCol={{ span: 20 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					// className={styles.authLabel}
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
						<Form.Item
							name="remember"
							valuePropName="checked"
							// wrapperCol={{ offset: 0, span: 12 }}
							// labelCol={{ span: 8 }}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Col>
					<Col className={styles.confirmBtn} span={12}>
						<Form.Item>
							<Button
								className={styles.button}
								type="primary"
								htmlType="submit"
							>
								Submit
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default AuthForm;
