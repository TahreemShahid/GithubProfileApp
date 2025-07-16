import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import githubThunkReducer from '../features/githubThunk/githubThunkSlice';
import { githubApi } from '../features/githubRTK/githubApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    githubThunk: githubThunkReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
