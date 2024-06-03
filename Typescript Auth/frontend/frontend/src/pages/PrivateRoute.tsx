import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);

  return authContext?.user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
