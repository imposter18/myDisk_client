import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/app";
import { BrowserRouter } from "react-router-dom";

import { setupStore } from "@/Shared/store/store";
import { Provider } from "react-redux";
// import {Context} from './Shared/ui/newModal/newModal'

const root = createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={setupStore}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
