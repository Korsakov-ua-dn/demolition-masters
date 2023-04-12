import React from 'react';

import { MobileItem } from '../mobile-item';

import type { Project } from '../../config';

import './style.scss';

interface IProps {
  ourProjects: Project[];
}

export const Mobile: React.FC<IProps> = (props) => {
  return (
    <div className="Mobile">
      {props.ourProjects.map((project) => (
        <MobileItem key={project.id} project={project} />
      ))}
    </div>
  );
};
