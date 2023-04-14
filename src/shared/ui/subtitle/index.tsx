import React from 'react';

import './style.scss';

interface IProps {
  children: string;
}

export const Subtitle: React.FC<IProps> = ({ children }) => {
  return <h3 className="Subtitle">{children}</h3>;
};
