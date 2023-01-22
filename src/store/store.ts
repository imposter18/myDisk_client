import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/authUser/AuthUserSlice";

export const setupStore = configureStore({
	reducer: {
		userReducer,
	},
	// devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
