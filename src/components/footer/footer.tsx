import React, { memo } from "react";
import { Divider } from "antd";
import * as styles from "./footer.module.scss";

const Footer = memo(() => {
	return (
		<footer>
			<Divider className={styles.footerDivider} />

			<a href="#" className={styles.footerLinks}>
				<i className="bi bi-github"></i>
				GitHub
			</a>
		</footer>
	);
});

export default Footer;
