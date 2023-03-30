import React, { useEffect } from "react";
import "./styles/index.scss";
import { Registration } from "@/Pages/registrationPage";
import { AuthPage } from "@/Pages/authPage";
import { Layout } from "@/Shared/ui/layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Shared/lib/hooks/redux";
import { checkAuth } from "@/Entities/viewer";
import ProtectedRoute from "@/Shared/lib/hoc/protectedRoute";
import PublicRoute from "@/Shared/lib/hoc/publicRoute";
import { DiskPage } from "@/Pages/disk";
import { useAppSelector } from "../Shared/lib/hooks/redux";
import { Redirect } from "@/Pages/redirect";
import { Alert, Col, Row, Space, notification, Spin } from "antd";
import { useTheme } from "@/Shared/lib/theme";
import { SpinnerWithTitle } from "@/Shared/ui/spinnerWithTitle";

const App = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const dispath = useAppDispatch();
	const { firstLoading } = useAppSelector((state) => state.userReducer);
	useEffect(() => {
		dispath(checkAuth());
	}, []);
	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	if (firstLoading) {
		return <SpinnerWithTitle title={"Loadind app..."}></SpinnerWithTitle>;
	}

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route element={<PublicRoute />}>
					<Route path="/" element={<Registration />}></Route>
					<Route path="registration" element={<Registration />}></Route>
					<Route path="auth" element={<AuthPage />}></Route>
				</Route>
				<Route path="/drive" element={<ProtectedRoute></ProtectedRoute>}>
					<Route index path="/drive/my-disk" element={<DiskPage />}></Route>
					<Route index path="/drive/search" element={<DiskPage />}></Route>
					<Route path="/drive/folder/:folderId" element={<DiskPage />}></Route>
				</Route>
				<Route path="*" element={<Redirect />} />
			</Route>
		</Routes>
	);
};

export default App;
