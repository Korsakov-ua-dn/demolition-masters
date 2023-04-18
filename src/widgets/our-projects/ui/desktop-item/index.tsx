/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Project } from '../../config';

import './style.scss';

interface IProps {
  project: Project;
}

export const DesktopItem: React.FC<IProps> = ({ project }) => {
  const imgPath = require(`../images/${project.id}.webp`);
  const imgPath2x = require(`../images/${project.id}@2x.webp`);
  return (
    <div className="DesktopItem">
      <div className="DesktopItem__image">
        <picture>
          <source srcSet={`${imgPath2x} 2x, ${imgPath} 1x`} />
          <img src={imgPath} alt="Bar" />
        </picture>
      </div>
      <a href="#" className="DesktopItem__text">
        <h3 className="DesktopItem__title">{project.title}</h3>
        <p className="DesktopItem__description">{project.description}</p>
        <span className="DesktopItem__date">{project.date}</span>
      </a>
    </div>
  );
};
