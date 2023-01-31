import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/AuthUserSlice";
import { FileReducer } from "@/Shared/store/reducers/fileSlice";
import { VisiblePopupReducer } from "@/Entities/popup/model/store/popupSlice";

export const setupStore = configureStore({
	reducer: {
		userReducer,
		FileReducer,
		VisiblePopupReducer,
	},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
