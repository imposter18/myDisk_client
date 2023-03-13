export const sizeFormat = (size: number) => {
	if (size >= 1024 * 1024 * 1024) {
		return (size / (1024 * 1024 * 1024)).toFixed(1) + " Gb";
	}

	if (size > 1024 * 1024) {
		return (size / (1024 * 1024)).toFixed(1) + " Mb";
	}
	if (size > 1024) {
		return (size / 1024).toFixed(1) + " Kb";
	}
	if (size === 0) {
		return 0;
	}
	return size + "B";
};
