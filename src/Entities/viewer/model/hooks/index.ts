import { useAppSelector } from "@/Shared/lib/hooks/redux";

export const useViewer = () => {
	return useAppSelector((state) => state.userReducer.currentUser);
};
export const useViewerError = () => {
	return useAppSelector((state) => state.userReducer.error);
};
export const useViewerIsAuth = () => {
	return useAppSelector((state) => state.userReducer.isAuth);
};
export const useViewerIsLoadind = () => {
	return useAppSelector((state) => state.userReducer.isLoaging);
};
export const useViewerIsFirsLoadind = () => {
	return useAppSelector((state) => state.userReducer.firstLoading);
};
