import React from "react";
import { Divider } from "antd";
import styles from "./footer.m.scss";

const Footer = () => {
	return (
		<footer>
			<Divider className={styles.footerDivider} />

			<a href="#" className={styles.footerLinks}>
				<i class="bi bi-github"></i>
				GitHub
			</a>
		</footer>
	);
};

export default Footer;
