import React from "react";
import { useAppDispatch } from "../Shared/lib/hooks/redux";

const MainPage = () => {
	const dispatch = useAppDispatch();

	return (
		<>
			<h1 style={{ textAlign: "center", margin: "100px auto" }}>
				Вход выполнен
			</h1>
		</>
	);
};
export default MainPage;
