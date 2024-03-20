import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { UserApi } from '../api/openapi';
import { useAuth } from '../auth/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const userApi = new UserApi();
  const { setIsLoggedIn } = useAuth();

  const login = async () => {
    try {
      // login via google
      const result = await signInWithPopup(auth, provider);
      const response = await userApi.loginUser({ id_token: await result.user.getIdToken() });
      setIsLoggedIn(true);
      localStorage.setItem('access_token', response.data?.access_token ?? '');
      localStorage.setItem('user_name', result.user.displayName ?? '');
      localStorage.setItem('user_email', result.user.email ?? '');
      navigate('/');
    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  };

  return (
    <div className="w-full grid grid-rows-8 grid-flow-col gap-8 justify-center mt-20">
      <GoogleLoginButton onClick={login}>Google Login</GoogleLoginButton>
    </div>
  );
};

export default Login;
