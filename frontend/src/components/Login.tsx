import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleLoginButton, AppleLoginButton } from 'react-social-login-buttons';

const Login = () => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch {
      navigate('/login');
    }
  };

  return (
    <div className="w-full grid grid-rows-8 grid-flow-col gap-8 justify-center mt-20">
      <GoogleLoginButton onClick={login}>Google Login</GoogleLoginButton>
      <AppleLoginButton onClick={login}>Apple Login</AppleLoginButton>
    </div>
  );
};

export default Login;
