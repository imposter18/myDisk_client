import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const ProtectedRoute = ({ children }: any) => {
	const { isAuth } = useAppSelector((state) => state.userReducer);
	if (!isAuth) {
		return <Navigate to={"/auth"} />;
	}

	return <Outlet />;
};
export default ProtectedRoute;
