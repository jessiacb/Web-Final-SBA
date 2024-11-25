import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      //save user to local storage/global state 
      localStorage.setItem('username', username);
      //redirect to swipepage
      navigate('/swipe');
    } else {
      alert('Please enter your name or email to continue.');
    }
  };

  return (
    <div>
      <h1>Welcome to Restaurant Matcher</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your name or email:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name or Email"
          required
        />
        <button type="submit">Start Swiping</button>
      </form>
    </div>
  );
};

export default LoginPage;
