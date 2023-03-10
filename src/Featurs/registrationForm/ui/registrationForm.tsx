import React, { useState } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import * as styles from "./registrationForm.module.scss";
import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import {
	registrationUser,
	useViewerError,
	useViewerIsLoadind,
} from "@/Entities/viewer";
import { PopupForStatus } from "@/Shared/ui/popupForStatus";

export const RegistrationForm = () => {
	const [error, setError] = useState(false);
	const isLoaging = useViewerIsLoadind();
	const dispatch = useAppDispatch();
	const errorMessage = useViewerError();
	const onFinish = (values: {
		username: string;
		Email: string;
		password: string;
		remember: boolean;
	}) => {
		console.log(values);
		const { username, Email, password, remember } = values;
		dispatch(
			registrationUser({ email: Email, password, userName: username })
		).then((res) => {
			if (res.meta.requestStatus === "fulfilled") setError(false);
			if (res.meta.requestStatus === "rejected") setError(true);
		});
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			{/* {error && (
				<PopupForStatus
					// messageProps={errorMessage}
					typeProps="error"
				></PopupForStatus>
			)} */}
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
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>

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
						{/* <Form.Item
							name="remember"
							valuePropName="checked"
							// wrapperCol={{ offset: 0, span: 12 }}
							// labelCol={{ span: 8 }}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item> */}
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
