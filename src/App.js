import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import GithubThunkProfile from './features/githubThunk/GithubThunkProfile';
import GithubRTKProfile from './features/githubRTK/GithubRTKProfile';

function App() {
  return (
    <div>
      {/* Decorative GitHub background icon */}
      <svg className="github-bg-icon" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M49 0C21.9 0 0 21.9 0 49c0 21.7 14.1 40.1 33.7 46.6 2.5.5 3.4-1.1 3.4-2.4 0-1.2 0-5.1 0-9.2-13.7 3-16.6-5.9-16.6-5.9-2.3-5.8-5.6-7.3-5.6-7.3-4.6-3.1.3-3 .3-3 5.1.4 7.8 5.2 7.8 5.2 4.5 7.7 11.8 5.5 14.7 4.2.5-3.2 1.8-5.5 3.2-6.8-10.9-1.2-22.4-5.4-22.4-24.1 0-5.3 1.9-9.6 5.1-13-0.5-1.2-2.2-6.1.5-12.7 0 0 4.1-1.3 13.3 5.1 3.9-1.1 8-1.7 12.1-1.7s8.2.6 12.1 1.7c9.2-6.4 13.3-5.1 13.3-5.1 2.7 6.6 1 11.5.5 12.7 3.2 3.4 5.1 7.7 5.1 13 0 18.7-11.5 22.9-22.4 24.1 1.8 1.6 3.4 4.7 3.4 9.5 0 6.8 0 12.3 0 14 0 1.3.9 2.9 3.4 2.4C83.9 89.1 98 70.7 98 49 98 21.9 76.1 0 49 0z" fill="#fff"/>
      </svg>
      <h1>GitHub User Profile App</h1>
      <GithubThunkProfile />
      <hr />
      <GithubRTKProfile />
    </div>
  );
}

export default App;
