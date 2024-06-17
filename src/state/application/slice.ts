import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'state';

export enum Application_Modal {
	CREATE_MAGIC_WALLET = 'CREATE_MAGIC_WALLET',
	CONFIRM = 'CONFIRM',
	ALERT = 'ALERT'
}

export interface ApplicationState {
	readonly openModal: Application_Modal | null;
}

const initialState: ApplicationState = {
	openModal: null
};

const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.openModal = action.payload;
		}
	}
});

export const { setOpenModal } = applicationSlice.actions;

export const applicationBaseState = (state: RootState) => state.application;

export default applicationSlice.reducer;
