import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../../Entities/viewer/model/store/AuthUserSlice";
import { FileReducer } from "@/Entities/file/model/store/fileSlice";
import { themeReducer } from "@/Shared/lib/theme";
import { uploadReducer } from "@/Widgets/uploader/model/store/uploadReducer";
import { stackReducer } from "@/Widgets/DirStack";
import { createDirReducer } from "@/Featurs/modalCreateDir";
import { deleteFileReducer } from "@/Featurs/deleteFileBtn";
import { sortFileReducer } from "@/Featurs/sortFileList";
import { viewFileListReducer } from "@/Featurs/viewFileList";
import { searchFilesReducer } from "@/Featurs/searchFiles";
import { renameFileReducer } from "@/Featurs/modalRenameFile";

export const setupStore = configureStore({
	reducer: {
		userReducer,
		FileReducer,
		themeReducer,
		uploadReducer,
		stackReducer,
		createDirReducer,
		deleteFileReducer,
		sortFileReducer,
		viewFileListReducer,
		searchFilesReducer,
		renameFileReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispatch = typeof setupStore.dispatch;
