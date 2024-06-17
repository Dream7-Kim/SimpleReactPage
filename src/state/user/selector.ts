import { createSelector } from '@reduxjs/toolkit';

import { userBaseState } from './slice';

export const selectIsLogin = createSelector([userBaseState], state => {
	return !!state.token;
});
