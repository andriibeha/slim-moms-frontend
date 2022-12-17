// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const Status = 'loading' | 'success' | 'error';

// const initialState: LaunchSlickState = {

//   status: Status.[],

// };

// const TOKEN_KEY = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

// export const fetchJobsData = createAsyncThunk(
//   'jobs/fetchJobsData',
//   async () => {
//     const { data } = await axios({
//       method: 'post',
//       url: `https://api.json-generator.com/templates/ZM1r0eic3XEy/data`,
//       headers: {
//         Authorization: 'Bearer ' + TOKEN_KEY,
//       },
//       data: {},
//     });

//     return data;
//   }
// );

// export const jobsSlice = createSlice({
//   name: 'loader',
//   initialState,
//   reducers: {
//     setJobListData(state, action) {
//       state.items = action.payload;
//     },
//     setJobDetail(state, action) {
//       state.item = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchJobsData.pending]: (state, action) => {
//       state.status = 'loading';
//       state.items = [];
//     },
//     [fetchJobsData.fulfilled]: (state, action) => {
//       state.items = action.payload;
//       state.status = 'success';
//     },
//     [fetchJobsData.rejected]: (state, action) => {
//       state.status = 'error';
//       state.items = [];
//     },
//   },
// });

// export const { setJobListData, setJobDetail } = jobsSlice.actions;

// export default jobsSlice.reducer;
