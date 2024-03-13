import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { Button } from 'primereact/button';

const Home = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const result = await signOut(auth);
    console.log(result);
    navigate('/');
  };
  return (
    <>
      <h1>This is Home Page, You have logged in</h1>;
      <Button className="m-3" onClick={logout}>
        Logout
      </Button>
      ;
    </>
  );
};

export default Home;
