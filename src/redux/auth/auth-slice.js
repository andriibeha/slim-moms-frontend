const { createSlice } = require('@reduxjs/toolkit');
const logOut = require('./auth-operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logOut.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
