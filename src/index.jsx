import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { setupStore } from "./store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Button } from "antd";
import Registration from "./components/registration/registration";
import Layout from "./components/layout/layout";

// import App from "@/pages/App";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={setupStore}>
			<BrowserRouter>
				<Layout>
					<Registration></Registration>
				</Layout>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
