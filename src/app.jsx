import React, { useEffect } from "react";
import Registration from "./pages/registration";
import Auth from "./pages/auth";
import Layout from "./components/layout/layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux";
import { checkAuth } from "./store/reducers/authUser/AT-checkAuth";
import ProtectedRoute from "./hoc/protectedRoute";
import PublicRoute from "./hoc/publicRoute";
import MainPage from "./pages/main";
import { useAppSelector } from "./hooks/redux";
import Redirect from "./components/redirect/redirect";

const App = () => {
	const navigate = useNavigate();
	// const { isAuth, isLoaging } = useAppSelector((state) => state.userReducer);
	// const { userName } = useAppSelector((state) => state.userReducer.currentUser);
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
					<Route index path="/" element={<Registration />}></Route>
					<Route path="registration" element={<Registration />}></Route>
					<Route path="auth" element={<Auth />}></Route>
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
