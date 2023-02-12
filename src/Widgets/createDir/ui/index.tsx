import React, { useState } from "react";
import { ModalCreateDir } from "@/Featurs/modalCreateDir";
import { PopupForStatus } from "@/Shared/ui/popupForStatus";

export const CreateDir = ({ visibleModal, setVisibleModal }: any) => {
	const [folderName, setFolderName] = useState<string>("");
	const [visiblePopup, setVisiblePopup] = useState(false);

	return (
		<>
			<ModalCreateDir
				visibleModal={visibleModal}
				setVisibleModal={setVisibleModal}
				setFolderName={setFolderName}
				setVisiblePopup={setVisiblePopup}
			></ModalCreateDir>
			{visiblePopup && (
				<PopupForStatus
					messageProps={` File "${folderName}" has created`}
				></PopupForStatus>
			)}
		</>
	);
};
