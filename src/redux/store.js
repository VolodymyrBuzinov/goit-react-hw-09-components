import phonebookReducer from './phonebook/reducers/reducers';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import authReducer from './auth/authReducers/authReducers';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}
const mainReducer = combineReducers({
  contacts: phonebookReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

const store = configureStore({ reducer: mainReducer, middleware, devTools: process.env.NODE_ENV === 'development' });
const persistor = persistStore(store);

const exported = {store, persistor}
export default exported;

