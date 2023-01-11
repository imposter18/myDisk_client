import { configureStore } from "@reduxjs/toolkit";
import { toggleReducer } from "./reducers/toggleSlice";

export const setupStore = configureStore({
	reducer: {
		toggleReducer,
	},
	// devTools: process.env.NODE_ENV !== "production",
});
