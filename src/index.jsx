import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { setupStore } from "./store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import ThemeProvider from "./components/theme/ThemeProvider";

// import App from "@/pages/App";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={setupStore}>
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
