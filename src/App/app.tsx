import React, { useEffect } from "react";
import "./styles/index.scss";
import { Registration } from "@/Pages/registrationPage/index";
import { AuthPage } from "@/Pages/authPage";
import Layout from "@/Featurs/layout/layout";
// import Layout from "@/";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Shared/lib/hooks/redux";
import { checkAuth } from "@/Shared/store/reducers/authUser/AT-checkAuth";
import ProtectedRoute from "../Shared/lib/hoc/protectedRoute";
import PublicRoute from "../Shared/lib/hoc/publicRoute";
import MainPage from "../Pages/main";
import { useAppSelector } from "../Shared/lib/hooks/redux";
import Redirect from "../Pages/redirect/redirect";

const App = () => {
	const navigate = useNavigate();
	const dispath = useAppDispatch();
	const { firstLoading } = useAppSelector((state) => state.userReducer);
	useEffect(() => {
		dispath(checkAuth());
	}, []);

	if (firstLoading) {
		return (
			<h1 style={{ margin: "100px auto", textAlign: "center" }}>Loading...</h1>
		);
	}
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route element={<PublicRoute />}>
					<Route path="/" element={<Registration />}></Route>
					<Route path="registration" element={<Registration />}></Route>
					<Route index path="auth" element={<AuthPage />}></Route>
				</Route>
				<Route element={<ProtectedRoute></ProtectedRoute>}>
					<Route path="/:userName" element={<MainPage />}></Route>
				</Route>
				<Route path="*" element={<Redirect />} />
			</Route>
		</Routes>
	);
};

export default App;
