import React, { useRef } from 'react';

import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { auth } from '../config/firebase';
import { OverlayPanel } from 'primereact/overlaypanel';
import UserMenu from './UserMenu';

const Navigation = () => {
  const navigate = useNavigate();
  const op = useRef<OverlayPanel>(null);

  const navlist = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => navigate('/'),
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-calendar',
      command: () => navigate('/about'),
    },
  ];
  const end = (
    <div className="flex align-items-center gap-2">
      {auth.currentUser && (
        <>
          <text className="my-2">{auth.currentUser?.displayName}</text>
          <Avatar
            image={auth?.currentUser?.photoURL ?? ''}
            onClick={(e) => op.current?.toggle(e)}
            shape="circle"
          />
        </>
      )}
    </div>
  );

  return (
    <div>
      <header>
        <nav>
          <ul>
            <Menubar model={navlist} end={end} />
          </ul>
          <UserMenu op={op} />
        </nav>
      </header>
    </div>
  );
};
export default Navigation;
