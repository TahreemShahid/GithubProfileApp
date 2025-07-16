import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGithubProfile } from './githubThunkSlice';

export default function GithubThunkProfile() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { profile, status, error } = useSelector((state) => state.githubThunk);

  const handleFetch = () => {
    if (username) dispatch(fetchGithubProfile(username));
  };

  return (
    <div className="profile-section">
      <h2>Redux Thunk GitHub Profile</h2>
      <div className="input-row">
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="GitHub username" type="text" />
        <button onClick={handleFetch}>Fetch</button>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p style={{color: '#f12711'}}>{error}</p>}
      {profile && (
        <div className="profile-details">
          <img src={profile.avatar_url} alt="avatar" />
          <p>{profile.name} ({profile.login})</p>
          <p>{profile.bio}</p>
        </div>
      )}
    </div>
  );
} 