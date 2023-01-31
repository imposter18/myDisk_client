import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/authUser/AuthUserSlice";
import { FileReducer } from "@/Pages/disk/models/store/fileSlice";

export const setupStore = configureStore({
	reducer: {
		userReducer,
		FileReducer,
	},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
