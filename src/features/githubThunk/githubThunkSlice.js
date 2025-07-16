import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGithubProfile = createAsyncThunk(
  'githubThunk/fetchProfile',
  async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  }
);

const githubThunkSlice = createSlice({
  name: 'githubThunk',
  initialState: { profile: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchGithubProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchGithubProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default githubThunkSlice.reducer; 