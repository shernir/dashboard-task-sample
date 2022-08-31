import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectUser = (state: RootState) => state.userSlice;

export const userSelect = createSelector(selectUser, (userSlice) => userSlice.user);
