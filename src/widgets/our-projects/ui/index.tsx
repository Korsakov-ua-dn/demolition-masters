import React from 'react';

import { Layout } from 'shared/ui/layout';
import { SectionTitle } from 'shared/ui/section-title';

import { ourProjects } from '../config';

import { Desktop } from './desktop';
import { Mobile } from './mobile';

import './style.scss';

export const OurProjects: React.FC = (props) => {
  return (
    <section className="OurProjects">
      <Layout>
        <SectionTitle>Наши проекты</SectionTitle>
        <Desktop ourProjects={ourProjects} />
      </Layout>
      <Mobile ourProjects={ourProjects} />
    </section>
  );
};
