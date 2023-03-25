import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setSearchValue } from "../model";
import * as styles from "./searchFiles.module.scss";

export const SearchFiles = React.memo(() => {
	const params = useParams();
	const [inputvalue, setInputvalue] = useState("");
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputvalue(value);
		dispatch(setSearchValue(value));
		if (value) {
			navigate(`/drive/search`, { replace: false });
		}
		if (!value) {
			navigate(`/drive/my-disk`);
		}
	};
	// ломает приложение
	// useEffect(() => {
	// 	if (!inputvalue) {
	// 		navigate(`/drive/my-disk`);
	// 		dispatch(setSearchValue(""));
	// 	}
	// }, []);
	useEffect(() => {
		if (params.folderId) {
			setInputvalue("");
			dispatch(setSearchValue(""));
		}
	}, [params.folderId]);
	const clearInputHandler = () => {
		dispatch(setSearchValue(""));
		setInputvalue("");
		navigate(`/drive/my-disk`);
	};
	return (
		<>
			<div className={styles.searchInput}>
				<input
					value={inputvalue}
					onChange={onInputHandler}
					placeholder="Search my disk"
					className={styles.input}
				/>
				{inputvalue ? (
					<span onClick={clearInputHandler} className={styles.searchClear}>
						<i className="bi bi-x"></i>
					</span>
				) : (
					<span className={styles.searchLogo}>
						<i className="bi bi-search"></i>
					</span>
				)}
			</div>
		</>
	);
});
