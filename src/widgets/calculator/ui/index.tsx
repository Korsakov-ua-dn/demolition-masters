import React from 'react';
import { Element } from 'react-scroll';

import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { SectionTitle } from 'shared/ui/section-title';
import { Button } from 'shared/ui/button';
import { Subtitle } from 'shared/ui/subtitle';

import { FormController } from './form-controller';
import './style.scss';

export const Calculator: React.FC = () => {
  return (
    <Section className="Calculator">
      <Element name="calculator"></Element>
      <Layout>
        <SectionTitle>Рассчитать стоимость работ</SectionTitle>

        <div className="Calculator__container">
          <Subtitle>Калькулятор</Subtitle>

          <FormController />

          <Button>Заказать</Button>
        </div>
      </Layout>
    </Section>
  );
};
