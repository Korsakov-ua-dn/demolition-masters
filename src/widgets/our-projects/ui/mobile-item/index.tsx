/* eslint-disable @typescript-eslint/no-var-requires */
import { Project } from '../../config';

import './style.scss';

interface IProps {
  project: Project;
}

export const MobileItem: React.FC<IProps> = ({ project }) => {
  const imgPath = require(`../images/${project.id}.webp`);
  const imgPath2x = require(`../images/${project.id}@2x.webp`);
  return (
    <div className="MobileItem">
      <div className="MobileItem__container">
        <div className="MobileItem__image">
          <picture>
            <source srcSet={`${imgPath2x} 2x, ${imgPath} 1x`} />
            <img src={imgPath} alt="Bar" />
          </picture>
        </div>
        <div className="MobileItem__text">
          <span className="MobileItem__title">{project.title}</span>
          <span className="MobileItem__description">{project.description}</span>
          <span className="MobileItem__date">{project.date}</span>
        </div>
      </div>
    </div>
  );
};
