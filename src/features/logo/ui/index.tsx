import { animateScroll as scroll } from 'react-scroll';

import { LogoSVG } from './logo-svg';

import './style.scss';

interface IProps {
  isTop: boolean;
}

const Logo: React.FC<IProps> = ({ isTop }) => {
  const scrollToTop = () => scroll.scrollToTop();
  return (
    <div className={`Logo ${isTop ? 'top' : ''}`} onClick={scrollToTop}>
      <LogoSVG />
    </div>
  );
};

export default Logo;
