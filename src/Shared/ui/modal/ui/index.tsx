import React from "react";
import * as styles from "./popup.module.scss";

export const Modal = ({ children, onClose }: any) => {
	return (
		<>
			<div onClick={() => onClose()} className={styles.popup}>
				<div onClick={(e) => e.stopPropagation()} className={styles.content}>
					{children}
				</div>
			</div>
		</>
	);
};
