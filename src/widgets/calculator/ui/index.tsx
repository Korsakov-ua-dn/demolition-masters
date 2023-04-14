import React from 'react';
import { Element } from 'react-scroll';

import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { SectionTitle } from 'shared/ui/section-title';

import './style.scss';

export const Calculator: React.FC = () => {
  return (
    <Section className="Calculator">
      <Element name="calculator"></Element>
      <Layout>
        <SectionTitle>Рассчитать стоимость работ</SectionTitle>
      </Layout>
    </Section>
  );
};
