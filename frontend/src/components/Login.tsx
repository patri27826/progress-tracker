import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { Button } from 'primereact/button';

const Login = () => {
  const navigate = useNavigate();
  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/home');
  };

  return (
    <div>
      <Button className="m-3" onClick={login}>Login</Button>

    </div>
  );
};

export default Login;
