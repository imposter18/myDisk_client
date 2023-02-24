import { useAppDispatch, useAppSelector } from "@/Shared/lib/hooks/redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDirStackThunk } from "../modal/thunk/getDirStack";

export const Stack = () => {
	const params = useParams();
	const { stack } = useAppSelector((state) => state.stackReducer);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (params.folderId) {
			dispatch(getDirStackThunk(params.folderId));
		}
		// if (!params.folderId) {
		// 	dispatch(getFiles(null));
		// }
	}, [params]);

	return (
		<>
			<div>
				{stack.map((item) => (
					<div>{item.name}</div>
				))}
			</div>
		</>
	);
};
