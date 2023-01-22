import React, { useEffect } from "react";
import Registration from "./pages/registration";
import Auth from "./pages/auth";
import Layout from "./components/layout/layout";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux";
import { checkAuth } from "./store/reducers/authUser/AT-checkAuth";

const App = () => {
	const dispath = useAppDispatch();
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispath(checkAuth());
		}
	});
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Registration />}></Route>
				<Route path="/registration" element={<Registration />}></Route>
				<Route path="/auth" element={<Auth />}></Route>
			</Routes>
		</Layout>
	);
};

export default App;
