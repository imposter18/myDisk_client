import React from "react";
import Header from "../../Widgets/header/header";
import Footer from "@/Widgets/footer/footer";
import * as styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: any) => {
	return (
		<div>
			<div className={styles.mainWrapper}>
				<Header></Header>
				<main>
					<Outlet></Outlet>
				</main>
			</div>

			<Footer></Footer>
		</div>
	);
};
export default Layout;
