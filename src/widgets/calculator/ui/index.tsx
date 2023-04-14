import React, { useCallback, useState } from 'react';
import { Element } from 'react-scroll';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';

import { Section } from 'shared/ui/section';
import { Layout } from 'shared/ui/layout';
import { SectionTitle } from 'shared/ui/section-title';
import SelectMUI from 'shared/ui/select-mui';
import { Button } from 'shared/ui/button';
import { Subtitle } from 'shared/ui/subtitle';

import { services } from '../config';
import './style.scss';

export const Calculator: React.FC = () => {
  const [value, setValue] = useState('');

  const onSelectHandler = useCallback(
    (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
      setValue(event.target.value as string);
    },
    []
  );

  return (
    <Section className="Calculator">
      <Element name="calculator"></Element>
      <Layout>
        <SectionTitle>Рассчитать стоимость работ</SectionTitle>

        <div className="Calculator__container">
          <Subtitle>Калькулятор</Subtitle>

          <div className="FormWrapper">
            <SelectMUI
              label="Виды работ"
              value={value}
              onChange={onSelectHandler}
            >
              {services.map((service) => (
                <MenuItem
                  style={{ fontStyle: 'normal' }}
                  key={service.id}
                  value={service.id}
                >
                  {service.title}
                </MenuItem>
              ))}
            </SelectMUI>

            <div>
              1. Длинна(м) <input></input>
            </div>
            <div>
              2. Ширина(м) <input></input>
            </div>
            <div>
              3. Высота(м) <input></input>
            </div>

            <div>Ориентировочная стоимость работ от 120_000руб.</div>
          </div>

          <Button>Заказать</Button>
        </div>
      </Layout>
    </Section>
  );
};
