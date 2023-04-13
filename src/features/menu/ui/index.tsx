import React from 'react';
import { scroller } from 'react-scroll';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FastRewindIcon from '@mui/icons-material/FastRewind';

import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { menuActions } from 'features/menu/model';

import { menuItems } from '../config';

import './style.scss';

interface IProps {
  isTop: boolean;
}

export const Menu: React.FC<IProps> = ({ isTop }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.menu.isOpen);
  const matches = useMediaQuery('(max-width:767px)');

  const cb = {
    handleDrawerOpen: () => {
      dispatch(menuActions.setOpen(true));
    },

    handleDrawerClose: () => {
      dispatch(menuActions.setOpen(false));
    },

    itemHandler: (to: string) => {
      scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        offset: matches ? -80 : -60,
        smooth: 'easeInOutQuart',
      });
    },
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

      <Drawer
        className="MenuDrawer"
        anchor={'right'}
        open={isOpen}
        onClose={cb.handleDrawerClose}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={cb.handleDrawerClose}
          onKeyDown={cb.handleDrawerClose}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  className="ListItemButton"
                  onClick={() => cb.itemHandler(item.id)}
                >
                  <ListItemIcon className="ListItemIcon">
                    <FastRewindIcon className="RewindIcon" />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
