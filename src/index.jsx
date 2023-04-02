import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/app";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { setupStore } from "@/Shared/store/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={setupStore}>
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>
);
