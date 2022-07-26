import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducers } from "./authSlice";
import { MessageReducers } from "./messageSlice";
import { JobseekerReducers } from "./jobseekerSlice";
import { ProfileReducers } from "./profileSlice";

const rootReducers = combineReducers({
	auth: AuthReducers,
	message: MessageReducers,
	jobseeker: JobseekerReducers,
	profile: ProfileReducers,
});

export default rootReducers;
