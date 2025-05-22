import { createSlice } from "@reduxjs/toolkit";


const jobslice = createSlice({
    name: "jobs",
    initialState:{
        jobs: [],
        savedJobs: [],
    },
    reducers: {
        setJobs: (state, action) =>{
          state.jobs = action.payload;
        },
        addJob:(state, action) =>{
          state.jobs.push(action.payload);
        },
        saveJob(state, action) {
          state.savedJobs.push(action.payload);
        },
      },

})

export const { setJobs, addJob, saveJob } = jobslice.actions;
export default jobslice.reducer;