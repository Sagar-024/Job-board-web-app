import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authslice.js'
import jobsReducer from '../features/jobslice.js';


const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
  },
});

export default store;