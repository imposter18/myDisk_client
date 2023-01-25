import React, { useEffect } from "react";
import SignForm from "../components/signForm/signForm";
import AuthForm from "../components/loginForm/loginForm";
import { useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
	const navigate = useNavigate();
	const { isAuth, isLoaging } = useAppSelector((state) => state.userReducer);
	const { userName } = useAppSelector((state) => state.userReducer.currentUser);
	useEffect(() => {
		if (isAuth && userName) {
			navigate(`/${userName}`);
		}
	}, [isAuth]);
	return (
		<SignForm>
			<AuthForm></AuthForm>
		</SignForm>
	);
};

export default Auth;
