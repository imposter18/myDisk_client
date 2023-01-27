import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/app";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./Shared/theme/ThemeProvider";
import { setupStore } from "@/Shared/store/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={setupStore}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
