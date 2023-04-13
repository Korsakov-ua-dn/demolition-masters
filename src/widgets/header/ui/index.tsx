import React, { useEffect, useState } from 'react';

import { Layout } from 'shared/ui/layout';

import { Logo } from 'features/logo';
import { Menu } from 'features/menu';

import './style.scss';

export const Header: React.FC = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  const userScrollHandler = () => {
    if (window.pageYOffset === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', userScrollHandler);
    return () => window.removeEventListener('scroll', userScrollHandler);
  }, []);

  return (
    <header className={`Header ${isTop ? 'top' : ''}`}>
      <Layout>
        <div className="Header__container">
          <Logo isTop={isTop} />
          <Menu isTop={isTop} />
        </div>
      </Layout>
    </header>
  );
};
