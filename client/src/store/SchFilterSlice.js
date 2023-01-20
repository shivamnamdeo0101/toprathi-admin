import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    fromWhere: [],
    educationType: [],
    caste: [],
    authority: [],
    region: [],
};
export const SchFilterSlice = createSlice({
    name: 'sch',
    initialState: initialState,
    reducers: {

        setFromWhere: (state, action) => {
            state.fromWhere = action.payload;
        },
        setEducationType: (state, action) => {
            state.educationType = action.payload;
        },
        setCaste: (state, action) => {
            state.caste = action.payload;
        },
        setAuthority: (state, action) => {
            state.authority = action.payload;
        },
        setRegion: (state, action) => {
            state.region = action.payload;
        },

        flushAuthData: (state) => {
            localStorage.clear();
            return initialState;
        },
    },
});
export const { setFromWhere,setEducationType,setCaste,setAuthority,setRegion } = SchFilterSlice.actions;

export default SchFilterSlice.reducer;