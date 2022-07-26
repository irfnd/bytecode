import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../helpers/axios";

const initialState = { profile: null };

const extraActions = {
	getProfile: createAsyncThunk("profile/getProfile", async (data, thunkAPI) => {
		try {
			const res = await Axios.get("/profile");
			return res.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.error.message);
		}
	}),
};

const extraReducers = () => {
	const { getProfile } = extraActions;
	return {
		[getProfile.fulfilled]: (state, action) => {
			state.profile = action.payload;
		},
		[getProfile.rejected]: (state) => {
			state.profile = null;
		},
	};
};

const ProfileSlice = createSlice({
	name: "profile",
	initialState,
	// reducers: {},
	extraReducers: extraReducers(),
});

export const ProfileActions = { ...ProfileSlice.actions, ...extraActions };
export const ProfileReducers = ProfileSlice.reducer;
