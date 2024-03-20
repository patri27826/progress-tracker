import React from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

interface UserMenuProps {
  op: React.RefObject<OverlayPanel>;
}

const UserMenu = ({ op }: UserMenuProps) => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate('/login');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('access_token');
  };

  return (
    <OverlayPanel ref={op}>
      <Button
        onClick={() => {
          logout();
          op.current?.hide();
        }}
      >
        Logout
      </Button>
    </OverlayPanel>
  );
};

export default UserMenu;
