import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

const Redirect = () => {
	const navigate = useNavigate();
	const [countdown, setCountdown] = useState<number>(3);
	const goBack = () => {
		navigate(-1);
	};
	useEffect(() => {
		let timer111 = setInterval(() => {
			setCountdown((time: number) => time - 1);
		}, 1000);
		return () => {
			clearInterval(timer111);
		};
	}, []);
	useEffect(() => {
		if (countdown == 0) {
			goBack();
		}
	}, [countdown]);
	return (
		<div style={{ margin: "100px auto" }}>
			<h1 style={{ textAlign: "center" }}>404: Not found</h1>;
			<div style={{ textAlign: "center" }}>
				You will be redirected back in {countdown} seconds ...
			</div>
		</div>
	);
};
export default Redirect;
