import React, { useEffect } from "react";
import { SignForm } from "@/Entities/signForm/index";
import { useAppSelector } from "@/Shared/lib/hooks/redux";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/Featurs/loginForm/index";

export const AuthWidget = () => {
	return (
		<SignForm>
			<LoginForm></LoginForm>
		</SignForm>
	);
};
