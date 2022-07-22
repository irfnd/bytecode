import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer} from "redux-persist"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import reducers from './reducers'

const persistConfig = {
    key: "root",
    storage,
}

const persistReducer = persistReducer(persistConfig, reducers)
const middleware = applyMiddleware(thunk)

const store = createStore(persistReducer, middleware)
const persistStore = persistStore(store)

export { store, persistStore }