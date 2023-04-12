import React from 'react';

import { DesktopItem } from '../desktop-item';

import type { Project } from '../../config';

import './style.scss';

interface IProps {
  ourProjects: Project[];
}

export const Desktop: React.FC<IProps> = (props) => {
  return (
    <div className="Desktop">
      {props.ourProjects.map((project) => (
        <DesktopItem key={project.id} project={project} />
      ))}
    </div>
  );
};
