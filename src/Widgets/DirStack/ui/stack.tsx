import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { removeStack } from "../modal";
import { getDirStackThunk } from "../modal/thunk/getDirStack";
import * as styles from "./stack.module.scss";
import {} from "react-icons";

export const Stack = () => {
	const params = useParams();
	const { stack } = useAppSelector((state) => state.stackReducer);
	const currentDir = useAppSelector((state) => state.FileReducer.currentDir);
	const dispatch = useAppDispatch();
	// console.log(params, "params11111");
	useEffect(() => {
		if (params.folderId) {
			dispatch(getDirStackThunk(params.folderId));
		}
		if (!params.folderId) {
			dispatch(removeStack());
		}
		// if (!params.folderId) {
		// 	dispatch(getFiles(null));
		// }
	}, [params.folderId]);
	const backDir = () => {
		return (
			<h3 className={styles.currenDir}>
				<Link
					to={`/drive${
						currentDir.parent ? /folder/ + currentDir.parent : "/my-disk"
					}`}
				>
					{currentDir.name}
				</Link>
			</h3>
		);
	};

	return (
		<>
			<nav className={styles.stack}>
				<ul>
					<li>
						{currentDir ? (
							<>
								<Link className={styles.header} to={"/drive/my-disk"}>
									Files
								</Link>
							</>
						) : (
							<h2>Files</h2>
						)}
					</li>
					{stack.map((item) =>
						item?._id ? (
							<li key={item._id}>
								<Link
									className={styles.header}
									to={`/drive/folder/${item._id}`}
								>
									{item.name}
								</Link>
							</li>
						) : null
					)}
				</ul>
				<div>{currentDir ? backDir() : ""}</div>
			</nav>
		</>
	);
};
