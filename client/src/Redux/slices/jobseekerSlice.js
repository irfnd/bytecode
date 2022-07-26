import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../helpers/axios";
import Alert from "sweetalert2";
import { MessageActions } from "./messageSlice";

const initialState = { jobseekers: null };

const extraActions = {
	getJobseekers: createAsyncThunk("jobseeker/getJobseekers", async ({ search, sort, size, page }, thunkAPI) => {
		try {
			const res = await Axios.get("/jobseekers", { params: { search, sort, size, page } });
			return res.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.error.message);
		}
	}),
	getJobseeker: createAsyncThunk("jobseeker/getJobseeker", async (id, thunkAPI) => {
		try {
			const res = await Axios.get(`/jobseekers/${id}`);
			return res.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.error.message);
		}
	}),
	getProfile: createAsyncThunk("jobseeker/getProfile", async (data, thunkAPI) => {
		try {
			const res = await Axios.get("/profile");
			return res.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.error.message);
		}
	}),
	updateProfile: createAsyncThunk("jobseeker/updateProfile", async (data, thunkAPI) => {
		try {
			const res = await Axios.post(`/profile`, data);
			thunkAPI.dispatch(MessageActions.setMessage(res.data.message));
			Alert.fire({ icon: "success", text: res.data.message });
			return res.data;
		} catch (err) {
			Alert.fire({ icon: "error", text: err.response.data.error.message });
			return thunkAPI.rejectWithValue(err.response.data.error.message);
		}
	}),
};

const extraReducers = () => {
	const { getJobseekers, getJobseeker, getProfile } = extraActions;
	return {
		[getJobseekers.fulfilled]: (state, action) => {
			state.jobseekers = action.payload.rows;
		},
		[getJobseekers.rejected]: (state) => {
			state.jobseekers = null;
		},
		[getJobseeker.fulfilled]: (state, action) => {
			state.jobseekers = null;
			state.jobseekers = action.payload;
		},
		[getJobseeker.rejected]: (state) => {
			state.jobseekers = null;
		},
		[getProfile.fulfilled]: (state, action) => {
			state.jobseekers = null;
			state.jobseekers = action.payload;
		},
		[getProfile.rejected]: (state) => {
			state.jobseekers = null;
		},
	};
};

const JobseekerSlice = createSlice({
	name: "jobseeker",
	initialState,
	// reducers: {},
	extraReducers: extraReducers(),
});

export const JobseekerActions = { ...JobseekerSlice.actions, ...extraActions };
export const JobseekerReducers = JobseekerSlice.reducer;
