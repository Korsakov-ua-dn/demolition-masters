import { LogoSVG } from './logo-svg';

import './style.scss';

interface IProps {
  isTop: boolean;
}

const Logo: React.FC<IProps> = ({ isTop }) => {
  return (
    <div className={`Logo ${isTop ? 'top' : ''}`}>
      <LogoSVG />
    </div>
  );
};

export default Logo;
