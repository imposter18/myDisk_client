import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../Entities/viewer/model/store/AuthUserSlice";
import { FileReducer } from "@/Entities/file/model/store/fileSlice";
// import { VisiblePopupReducer } from "@/Featurs/modalCreateDir";
import { themeReducer } from "@/Shared/lib/theme";
import { uploadReducer } from "@/Widgets/uploader/model/store/uploadReducer";

export const setupStore = configureStore({
	reducer: {
		userReducer,
		FileReducer,
		themeReducer,
		uploadReducer,
	},
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
