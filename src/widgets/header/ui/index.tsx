import React, { useEffect, useState } from 'react';

import { Layout } from 'shared/ui/layout';

import { Logo } from 'features/logo';

import './style.scss';

export const Header: React.FC = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  const scrollHandler = () => {
    if (window.pageYOffset === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header className={`Header ${isTop ? 'top' : ''}`}>
      <Layout>
        <div className="Header__container">
          <Logo isTop={isTop} />
        </div>
      </Layout>
    </header>
  );
};
