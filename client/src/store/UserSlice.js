import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {},
  isLoading: false,
  isSuccess: false,
  errMsg: '',
};
export const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    getAuthFetch:(state,action)=>{
      state.isLoading = true;
    },
    getAuthSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    getAuthFailure: (state, action) => {
      state.isLoading = false;
      state.errMsg = action?.payload;
    },
    flushAuthData: (state) => {
      localStorage.clear();
      
      return initialState;
    },
  },
});
export const { setUserDetails, flushAuthData,getAuthFetch,getAuthSuccess } = UserSlice.actions;

export default UserSlice.reducer;