import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./layout.m.scss";

const Layout = ({ children }) => {
	return (
		<div>
			<div className={styles.mainWrapper}>
				<Header></Header>
				<main>{children} </main>
			</div>

			<Footer></Footer>
		</div>
	);
};
export default Layout;
