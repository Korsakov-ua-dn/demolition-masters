import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import { menuItems } from '../../config';

import { MenuItem } from '../menu-item';

import './style.scss';

interface IProps {
  isOpen: boolean;
  closeHandler: () => void;
}

export const MenuList: React.FC<IProps> = ({ isOpen, closeHandler }) => {
  return (
    <Drawer
      className="MenuDrawer"
      anchor={'right'}
      open={isOpen}
      onClose={closeHandler}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={closeHandler}
        onKeyDown={closeHandler}
      >
        <List>
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
