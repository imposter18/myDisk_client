import React, { useEffect } from "react";
import { Switch, Space } from "antd";
import * as styles from "./themeToggle.module.scss";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { updateTheme } from "@/Process/theme/modal/store";

export const Toggle = ({}: any) => {
	const { theme } = useAppSelector((state) => state.themeReducer);
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
			className={styles.toggler}
			checked={theme === "dark"}
			checkedChildren={<i className="bi bi-moon-fill"></i>}
			unCheckedChildren={<i className="bi bi-brightness-high"></i>}
			onClick={onChange}
		/>
	);
};
