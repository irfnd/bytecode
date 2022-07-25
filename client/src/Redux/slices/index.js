import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducers } from "./authSlice";
import { MessageReducers } from "./messageSlice";

const rootReducers = combineReducers({
	auth: AuthReducers,
	message: MessageReducers,
});

export default rootReducers;
