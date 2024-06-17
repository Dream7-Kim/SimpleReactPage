import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { persistReducer } from 'reduxjs-toolkit-persist';
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import application from './application/slice';
import setting from './setting/slice';
import user from './user/slice';

const rootReducers = combineReducers({
	application,
	setting,
	user
});

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
	whitelist: ['setting', 'user']
};

const persistedReducer = persistReducer<any, Action>(
	persistConfig,
	rootReducers
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		}),
	devTools: import.meta.env.NODE_ENV !== 'production'
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
