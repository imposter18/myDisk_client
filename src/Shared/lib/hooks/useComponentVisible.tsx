import React, { useState, useEffect, useRef } from "react";

export const useComponentVisible = () => {
	const [isComponentVisible, setIsComponentVisible] = useState(false);
	const [points, setPoints] = useState({
		x: 0,
		y: 0,
	});
	const ref = useRef(null);

	const handleClickOutside = (event: MouseEvent): void => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};
	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
			window.addEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return { ref, isComponentVisible, setIsComponentVisible, points, setPoints };
};
