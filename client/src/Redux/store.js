import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducers from "./slices";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({ reducer: persistedReducer, middleware: [thunk] });
export const persistor = persistStore(store);

export default { store, persistor };
