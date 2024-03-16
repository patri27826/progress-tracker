import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../config/firebase';

const ProtectedRoutes = () => {
  console.log(auth.currentUser);
  return auth?.currentUser?.displayName ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
