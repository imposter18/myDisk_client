import React, { useEffect } from "react";
import Registration from "./pages/registration";
import Auth from "./pages/auth";
import Layout from "./components/layout/layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux";
import { checkAuth } from "./store/reducers/authUser/AT-checkAuth";
import ProtectedRoute from "./hoc/protectedRoute";
import MainPage from "./pages/main";
import { useAppSelector } from "./hooks/redux";

const App = () => {
	const navigate = useNavigate();
	const { isAuth, isLoaging } = useAppSelector((state) => state.userReducer);
	const dispath = useAppDispatch();
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispath(checkAuth());
		}
	}, []);
	useEffect(() => {
		if (isAuth) {
			navigate("/main");
		}
	}, [isAuth]);
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Registration />}></Route>
				<Route path="/registration" element={<Registration />}></Route>
				<Route path="/auth" element={<Auth />}></Route>
				<Route element={<ProtectedRoute></ProtectedRoute>}>
					<Route path="/main" element={<MainPage />}></Route>
				</Route>
				<Route path="*" element={<p>There's nothing here: 404!</p>} />
			</Routes>
		</Layout>
	);
};

export default App;
