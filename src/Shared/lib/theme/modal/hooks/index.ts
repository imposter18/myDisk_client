import { useAppSelector } from "@/Shared/lib/hooks/redux";

export const useTheme = () => {
	return useAppSelector((state) => state.themeReducer.theme);
};
