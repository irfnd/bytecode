import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	message: null,
};

const MessageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		clearMessage: (state) => {
			state.message = null;
		},
	},
});

export const MessageActions = { ...MessageSlice.actions };
export const MessageReducers = MessageSlice.reducer;
