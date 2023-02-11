import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/AuthUserSlice";
import { FileReducer } from "@/Shared/store/reducers/fileSlice";
// import { VisiblePopupReducer } from "@/Featurs/modalCreateDir";
import { themeReducer } from "@/Process/theme";

export const setupStore = configureStore({
	reducer: {
		userReducer,
		FileReducer,
		themeReducer,
	},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
