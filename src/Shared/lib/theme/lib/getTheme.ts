export const themes = {
	dark: "dark",
	light: "light",
};

export const getTheme = () => {
	const theme = `${window?.localStorage?.getItem("theme")}`;
	if (Object.values(themes).includes(theme)) return theme;

	const userMedia = window.matchMedia("(prefers-color-scheme: light)");
	if (userMedia.matches) return themes.light;

	return themes.dark;
};
