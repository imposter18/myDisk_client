import React from "react";
import { useAppDispatch } from "../hooks/redux";
import { logoutUser } from "../store/reducers/authUser/AT-logoutUser";

const MainPage = () => {
	const dispatch = useAppDispatch();

	return (
		<>
			<div>Вход выполнен</div>
		</>
	);
};
export default MainPage;
