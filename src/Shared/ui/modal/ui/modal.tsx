import React from "react";
import * as styles from "./popup.module.scss";

export const Modal = ({ children, onClose, modalRef, visible }: any) => {
	return (
		<>
			{visible && (
				<div
					onMouseDown={() => onClose()}
					onClick={(e) => e.stopPropagation()}
					className={styles.popup}
				>
					<div
						onClick={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
						className={styles.content}
					>
						{children}
					</div>
				</div>
			)}
		</>
	);
};
