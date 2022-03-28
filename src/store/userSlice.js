import { createSlice } from '@reduxjs/toolkit';
import { getLoggedUser, isLogin, setAccessToken, setLoggedUser } from '../utils';
import { fetchUser } from './thunks';

const initialState = {
  isLogged: isLogin(),
  loading: false,
  error: null,
  data: getLoggedUser(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log('fulfilled', action.payload);
      state.loading = false;
      state.isLogged = true;
      state.data = action.payload.user;
      setLoggedUser(action.payload.user);
      setAccessToken(action.payload.tokens.access.token);
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log('rejected', action);
      state.loading = false;
      state.err = action.payload;
    });
  },
});

export const { login, updateFields } = userSlice.actions;

export default userSlice.reducer;
