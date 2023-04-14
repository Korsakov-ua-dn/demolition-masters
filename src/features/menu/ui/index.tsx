import React, { useCallback, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { MenuList } from './menu-list';

import './style.scss';

interface IProps {
  isTop: boolean;
}

export const Menu: React.FC<IProps> = ({ isTop }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cb = {
    handleDrawerOpen: useCallback(() => {
      setIsOpen(true);
    }, []),

    closeHandler: useCallback(() => {
      setIsOpen(false);
    }, []),
  };

  const className = `MenuButton ${isTop ? 'top' : ''} ${isOpen ? 'open' : ''}`;

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open menu"
        onClick={cb.handleDrawerOpen}
        edge="end"
        className={className}
      >
        <MenuIcon />
      </IconButton>

      <MenuList isOpen={isOpen} closeHandler={cb.closeHandler} />
    </>
  );
};
