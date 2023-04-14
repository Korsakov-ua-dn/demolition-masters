import React from 'react';
import { scroller } from 'react-scroll';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FastRewindIcon from '@mui/icons-material/FastRewind';

import { useHeaderHeight } from 'shared/hooks';

import { IMenuItem } from '../../config';

import './style.scss';

interface IProps {
  item: IMenuItem;
}

export const MenuItem: React.FC<IProps> = ({ item }) => {
  const headerHeight = useHeaderHeight();

  const itemHandler = (to: string) => {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      offset: headerHeight * -1,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <ListItem key={item.id} disablePadding>
      <ListItemButton
        className="MenuItemButton"
        onClick={() => itemHandler(item.id)}
      >
        <ListItemIcon className="MenuItemIcon">
          <FastRewindIcon className="RewindIcon" />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </ListItem>
  );
};
