import React from "react";
import { Header } from "@/Widgets/header";
import { Footer } from "@/Widgets/footer";
import * as styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }: any) => {
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
