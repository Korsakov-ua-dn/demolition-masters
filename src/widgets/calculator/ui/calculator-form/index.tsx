import React from 'react';

import './style.scss';

interface IProps {
  children: React.ReactNode;
}

export const CalculatorForm: React.FC<IProps> = ({ children }) => {
  return <div className="Calculator__form">{children}</div>;
};
