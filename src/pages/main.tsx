import React from "react";
import { useAppDispatch } from "../hooks/redux";
import { logoutUser } from "../store/reducers/authUser/AT-logoutUser";

const MainPage = () => {
	const dispatch = useAppDispatch();

	const logout = () => {
		dispatch(logoutUser());
	};
	return (
		<>
			<div>Вход выполнен</div>;<button onClick={logout}>выход</button>
		</>
	);
};
export default MainPage;
