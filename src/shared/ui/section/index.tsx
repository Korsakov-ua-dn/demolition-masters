import React, { memo } from 'react';
import { Element } from 'react-scroll';

import './style.scss';

interface IProps {
  children: React.ReactNode;
  className: string;
}

export const Section: React.FC<IProps> = memo(({ children, className }) => {
  return (
    <section className={`Section ${className}`}>
      <Element name={className}></Element>
      {children}
    </section>
  );
});
