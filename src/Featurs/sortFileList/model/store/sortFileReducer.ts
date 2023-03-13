import { createSlice } from "@reduxjs/toolkit";

interface ISortFileInitialState {
	sort: "name" | "size" | "type" | "date" | string;
	derection: "asc" | "desc" | string;
}
const sortFromLS = localStorage.getItem("sort");
const derectionFromLS = localStorage.getItem("derection");

const initialState: ISortFileInitialState = {
	sort: sortFromLS ? sortFromLS : "date",
	derection: derectionFromLS ? derectionFromLS : "asc",
};

const sortFileSlice = createSlice({
	name: "sortFile",
	initialState,
	reducers: {
		setSort(state, action) {
			state.sort = action.payload;
			localStorage.setItem("sort", action.payload);
		},
		setDerection(state, action) {
			state.derection = action.payload;
			localStorage.setItem("derection", action.payload);
		},
	},
});

export const { setSort, setDerection } = sortFileSlice.actions;

export const sortFileReducer = sortFileSlice.reducer;
