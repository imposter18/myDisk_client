import React, { useEffect } from "react";
import SignForm from "../components/signForm/signForm";
import RegistrationForm from "../components/registrationForm/registrationForm";
import { useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router-dom";

const Registration = () => {
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
			<RegistrationForm></RegistrationForm>
		</SignForm>
	);
};

export default Registration;
