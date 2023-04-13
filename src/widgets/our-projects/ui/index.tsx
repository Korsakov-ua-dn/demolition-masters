import React from 'react';
import { Element } from 'react-scroll';

import { Layout } from 'shared/ui/layout';
import { SectionTitle } from 'shared/ui/section-title';

import { ourProjects } from '../config';

import { Desktop } from './desktop';
import { Mobile } from './mobile';

import './style.scss';

export const OurProjects: React.FC = (props) => {
  return (
    <section className="OurProjects">
      <Element name="ourProjects"></Element>
      <Layout>
        <SectionTitle>Наши проекты</SectionTitle>
        <Desktop ourProjects={ourProjects} />
      </Layout>
      <Mobile ourProjects={ourProjects} />
    </section>
  );
};
