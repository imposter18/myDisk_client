import React, { useEffect } from "react";
import { Switch, Space } from "antd";
import * as styles from "./themeToggle.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { updateTheme } from "@/Shared/lib/theme";
import { useTheme } from "@/Shared/lib/theme";

interface IProps {
	className?: string;
}
export const Toggle = ({ className }: IProps) => {
	const theme = useTheme();
	const dispatch = useAppDispatch();

	const onChange = () => {
		if (theme === "light") dispatch(updateTheme("dark"));
		if (theme === "dark") dispatch(updateTheme("light"));
	};
	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);
	return (
		<Switch
			className={`${styles.toggler} ${className}`}
			checked={theme === "dark"}
			checkedChildren={<i className="bi bi-moon-fill"></i>}
			unCheckedChildren={<i className={`bi bi-brightness-high `}></i>}
			onClick={onChange}
		/>
	);
};
