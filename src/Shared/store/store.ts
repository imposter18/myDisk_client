import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../Entities/viewer/model/store/AuthUserSlice";
import { FileReducer } from "@/Entities/file/model/store/fileSlice";
// import { VisiblePopupReducer } from "@/Featurs/modalCreateDir";
import { themeReducer } from "@/Shared/lib/theme";

export const setupStore = configureStore({
	reducer: {
		userReducer,
		FileReducer,
		themeReducer,
	},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
