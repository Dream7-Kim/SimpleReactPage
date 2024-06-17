import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'state';
import { App_Theme } from 'types';

import { DEFAULT_LOCALE } from '../../language/locales';

interface StateProperties {
	currentTheme: App_Theme;
	activeLocale: string;
}

const initialState: StateProperties = {
	currentTheme: App_Theme.light,
	activeLocale: DEFAULT_LOCALE
};

export const slice = createSlice({
	name: 'setting',
	initialState,
	reducers: {
		setCurrentTheme(state, action: PayloadAction<App_Theme>) {
			state.currentTheme = action.payload;
		},
		setActiveLocale(state, { payload }) {
			state.activeLocale = payload;
		}
	}
});

export const { setCurrentTheme, setActiveLocale } = slice.actions;

export const settingBaseState = (state: RootState) => state.setting;

export default slice.reducer;
