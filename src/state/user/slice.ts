import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'state';

interface StateProperties {
	mailbox: string;
	token?: string;
}

const initialState: StateProperties = {
	mailbox: '',
	token: undefined
};

export const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setMailbox(state, action: PayloadAction<string>) {
			state.mailbox = action.payload;
		},
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		resetUser(state) {
			Object.assign(state, initialState);
		}
	}
});

export const { setMailbox, setToken, resetUser } = slice.actions;

export const userBaseState = (state: RootState) => state.user;

export default slice.reducer;
