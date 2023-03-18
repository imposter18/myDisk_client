import { uploadFileThunk } from "@/Entities/file";
import { ModalCreateDir } from "@/Featurs/modalCreateDir";
import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import { useComponentVisible } from "@/Shared/lib/hooks/useComponentVisible";
import { CastomBtn } from "@/Shared/ui/btn";
import { DiskSpace } from "@/Widgets/diskSpace";
// import { CreateDir } from "@/Widgets/createDir";
import { changeUploadStatus } from "@/Widgets/uploader";
import React, { useState } from "react";
import * as styles from "./liftBlock.module.scss";

interface Iprops {
	fileuploadHandler: (files: File[] | FileList) => void;
}

export const LeftDiskBlock = React.memo(({ fileuploadHandler }: Iprops) => {
	const { isComponentVisible, setIsComponentVisible } = useComponentVisible();

	const inputUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// const files = [...event.target.files]; ts ругается
		const files = event.target.files;
		const inputClear = document.getElementById("upload") as HTMLInputElement;
		inputClear.value = "";
		fileuploadHandler(files);
	};

	return (
		<div className={styles.leftBlock}>
			<div className={styles.topBtnBlock}>
				<label className={styles.lable} htmlFor="upload">
					<CastomBtn className={styles.lableBtn} content={"Upload"}></CastomBtn>
				</label>
				<input
					id="upload"
					multiple={true}
					onChange={(event) => inputUploadHandler(event)}
					className={styles.input}
					type="file"
				></input>
				<CastomBtn
					onClick={() => setIsComponentVisible(true)}
					content={"Create folder"}
					className={styles.btnCreateFolder}
				></CastomBtn>
			</div>
			<div className={styles.bottomBlock}>
				<DiskSpace></DiskSpace>
			</div>
			<ModalCreateDir
				isComponentVisible={isComponentVisible}
				setIsComponentVisible={setIsComponentVisible}
			></ModalCreateDir>
		</div>
	);
});
