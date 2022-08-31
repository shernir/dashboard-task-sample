import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces';

export interface IUserSliceState {
  user: IUser | undefined
}

const initialState: IUserSliceState = { user: undefined };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },

  },
});

export const { setUser } = userSlice.actions;

export default userSlice;
