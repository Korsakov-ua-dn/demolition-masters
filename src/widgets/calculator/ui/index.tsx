import React from 'react';
import { Element } from 'react-scroll';

import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { SectionTitle } from 'shared/ui/section-title';
import { Button } from 'shared/ui/button';
import { Subtitle } from 'shared/ui/subtitle';
import { useFeedbackPopup } from 'features/popup';

import { FormController } from './form-controller';
import './style.scss';

export const Calculator: React.FC = () => {
  const onContactUs = useFeedbackPopup();

  return (
    <Section className="Calculator">
      <Element name="calculator"></Element>
      <Layout>
        <SectionTitle>Рассчитать стоимость работ</SectionTitle>

        <div className="Calculator__container">
          <Subtitle>Калькулятор</Subtitle>

          <FormController />

          <Button onClick={onContactUs}>Заказать</Button>
        </div>
      </Layout>
    </Section>
  );
};
