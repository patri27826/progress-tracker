import React, { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';
import UserMenu from './UserMenu';
import { Button } from 'primereact/button';
import { IoMenu } from 'react-icons/io5';

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
  const userName = localStorage.getItem('user_name');
  const end = (
    <div className="flex align-items-center gap-2">
      {userName && <div className="my-2.5">{userName}</div>}
      <Button label="" icon={<IoMenu />} text onClick={(e) => op.current?.toggle(e)} />
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
