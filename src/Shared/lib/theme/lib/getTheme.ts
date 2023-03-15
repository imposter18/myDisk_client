export const themes = {
	dark: "dark",
	light: "light",
};

export const getTheme = () => {
	const theme = `${window?.localStorage?.getItem("theme")}`;
	if (Object.values(themes).includes(theme)) return theme;

	const userMedia = window.matchMedia("(prefers-color-scheme: light)");
	if (userMedia.matches) {
		// document.documentElement.dataset.theme = themes.light;
		return themes.light;
	}
	// document.documentElement.dataset.theme = themes.dark;
	return themes.dark;
};
