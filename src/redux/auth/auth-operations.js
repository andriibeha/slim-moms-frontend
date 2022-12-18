const { createAction } = require('@reduxjs/toolkit');

export const logOut = createAction('user/logout');

// export const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('users/logout');
//   } catch (error) {
//     console.log(error);
//   }
// });
