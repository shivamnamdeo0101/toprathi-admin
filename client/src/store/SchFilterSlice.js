import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    fromWhere: [],
    educationType: [],
    caste: [],
    authority: [],
    region: [],
    interest:[],
    branch:[],
    stream:[],
    examlist:[],
    percentage:[],
    annualIncome:[],
    degreeName:[]
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
        setExamList: (state, action) => {
            state.examlist = action.payload;
        },
        setInterestList: (state, action) => {
            state.interest = action.payload;
        },
        setBranchList: (state, action) => {
            state.branch = action.payload;
        },
        setStreamList: (state, action) => {
            state.stream = action.payload;
        },
        setPercentageList: (state, action) => {
            state.percentage = action.payload;
        },
        setAnnualIncomeList: (state, action) => {
            state.annualIncome = action.payload;
        },
        setDegreeNameList: (state, action) => {
            state.degreeName = action.payload;
        },



        flushAuthData: (state) => {
            localStorage.clear();
            return initialState;
        },
    },
});
export const { setFromWhere,setDegreeNameList, setEducationType,setPercentageList,setAnnualIncomeList, setCaste,setAuthority,setRegion,setExamList,setInterestList,setBranchList,setStreamList } = SchFilterSlice.actions;

export default SchFilterSlice.reducer;