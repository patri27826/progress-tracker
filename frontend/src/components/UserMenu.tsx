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
    const result = await signOut(auth);
    console.log(result);
    navigate('/login');
  };

  return (
    <OverlayPanel ref={op}>
      <Button onClick={() => {
        logout();
        op.current?.hide()
      }}>Logout</Button>
    </OverlayPanel>
  );
};

export default UserMenu;
