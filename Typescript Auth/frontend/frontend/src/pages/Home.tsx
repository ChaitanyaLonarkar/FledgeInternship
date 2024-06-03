
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the protected home page!</p>
      <button onClick={authContext?.logout}>Logout</button>
    </div>
  );
};

export default Home;
