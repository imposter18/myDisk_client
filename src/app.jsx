import React from "react";
import Registration from "./pages/registration";
import Auth from "./pages/auth";
import Layout from "./components/layout/layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
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
