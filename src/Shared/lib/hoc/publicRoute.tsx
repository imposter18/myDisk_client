import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const PublicRoute = ({ children }: any) => {
	const { isAuth } = useAppSelector((state) => state.userReducer);
	const { email } = useAppSelector((state) => state.userReducer.currentUser);
	const navigate = useNavigate();

	if (isAuth && email) {
		return <Navigate to={`/drive/my-disk`} />;
	}

	return <Outlet />;
};
export default PublicRoute;
