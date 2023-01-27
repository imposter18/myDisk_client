import React from "react";
// import styles from './index.module.scss'
import { Switch, Space } from "antd";
import * as styles from "./themeToggle.module.scss";

const Toggle = ({ value, onChange }: any) => (
	<Switch
		className={styles.toggler}
		checked={value}
		checkedChildren={<i className="bi bi-moon-fill"></i>}
		unCheckedChildren={<i className="bi bi-brightness-high"></i>}
		onClick={onChange}
	/>
);

export default Toggle;
