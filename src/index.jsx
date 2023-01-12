import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { setupStore } from "./store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Button } from "antd";
import App from "./app";

// import App from "@/pages/App";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={setupStore}>
			<BrowserRouter>
				<App></App>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
