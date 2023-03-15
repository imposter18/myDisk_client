import { useAppDispatch } from "@/Shared/lib/hooks/redux";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setSearchValue } from "../model";
import * as styles from "./searchFiles.module.scss";

export const SearchFiles = () => {
	const [inputvalue, setInputvalue] = useState("");
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const params = useParams();

	const onInputHandler = (e: any) => {
		const value = e.target.value;
		setInputvalue(value);
		dispatch(setSearchValue(value));
		// console.log(params, "params");
		if (value) {
			navigate(`/drive/search`);
		}
		if (!value) {
			navigate(`/drive/my-disk`);
		}
	};

	useEffect(() => {
		if (params.folderId) {
			setInputvalue("");
			dispatch(setSearchValue(""));
		}
	}, [params]);
	const clearInputHandler = () => {
		console.log("1231243124");
		dispatch(setSearchValue(""));
		setInputvalue("");
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
};
