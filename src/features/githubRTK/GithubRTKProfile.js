import React, { useState } from 'react';
import { useGetUserQuery } from './githubApi';

export default function GithubRTKProfile() {
  const [username, setUsername] = useState('');
  const [triggered, setTriggered] = useState(false);
  const { data, error, isLoading } = useGetUserQuery(username, { skip: !triggered || !username });

  return (
    <div className="profile-section">
      <h2>RTK Query GitHub Profile</h2>
      <div className="input-row">
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="GitHub username" type="text" />
        <button onClick={() => setTriggered(true)}>Fetch</button>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{color: '#f12711'}}>User not found</p>}
      {data && (
        <div className="profile-details">
          <img src={data.avatar_url} alt="avatar" />
          <p>{data.name} ({data.login})</p>
          <p>{data.bio}</p>
        </div>
      )}
    </div>
  );
} 