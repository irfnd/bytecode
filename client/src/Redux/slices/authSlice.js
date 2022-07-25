import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../helpers/axios";
import Cookies from "js-cookie";
import Alert from "sweetalert2";
import { MessageActions } from "./messageSlice";

const initialState = { isLoggedIn: false, user: null };

const extraActions = {
	register: createAsyncThunk("auth/register", async (data, thunkAPI) => {
		try {
			const res = await Axios.post("auth/register", data);
			thunkAPI.dispatch(MessageActions.setMessage(res.data.message));
			Alert.fire({ icon: "success", text: res.data.message });
			return res.data;
		} catch (err) {
			thunkAPI.dispatch(MessageActions.setMessage(err.response.data.error.message));
			Alert.fire({ icon: "error", text: err.response.data.error.message });
			return thunkAPI.rejectWithValue(err.response.data.error.message);
		}
	}),
	login: createAsyncThunk("auth/login", async (data, thunkAPI) => {
		try {
			const res = await Axios.post("auth/login", data);
			thunkAPI.dispatch(MessageActions.setMessage("Login Successfully"));
			Alert.fire({ icon: "success", text: "Login Successfully" });
			return res.data;
		} catch (err) {
			thunkAPI.dispatch(MessageActions.setMessage(err.response.data.error.message));
			Alert.fire({ icon: "error", text: err.response.data.error.message });
			return thunkAPI.rejectWithValue();
		}
	}),
};

const extraReducers = () => {
	const { register, login } = extraActions;
	return {
		[register.fulfilled]: (state) => {
			state.isLoggedIn = false;
		},
		[register.rejected]: (state) => {
			state.isLoggedIn = false;
		},
		[login.fulfilled]: (state, action) => {
			const { token, ...user } = action.payload;
			state.isLoggedIn = true;
			state.user = user;
			Cookies.set("token", action.payload.token);
			localStorage.setItem("user", JSON.stringify(user));
		},
		[login.rejected]: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	};
};

const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			Cookies.set("token", null);
			state.isLoggedIn = false;
			state.user = null;
		},
	},
	extraReducers: extraReducers(),
});

export const AuthActions = { ...AuthSlice.actions, ...extraActions };
export const AuthReducers = AuthSlice.reducer;
