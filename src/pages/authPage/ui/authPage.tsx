import React, { useEffect } from "react";
import { useAppSelector } from "../../../Shared/lib/hooks/redux";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/Featurs/loginForm/index";
import { AuthWidget } from "@/Widgets/auth";

export const AuthPage = () => {
	return <AuthWidget></AuthWidget>;
};
