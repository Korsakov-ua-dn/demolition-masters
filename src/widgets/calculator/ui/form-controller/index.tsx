import React, { useCallback, useReducer } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';

import { SelectMUI } from 'shared/ui/select-mui';

import { Service, services } from '../../config';
import { getTotal } from '../../lib';
import {
  reducer,
  setHeight,
  setLength,
  setService,
  setWidth,
} from '../../reducer';

import { CalculatorForm } from '../calculator-form';
import { CalculatorField } from '../calculator-field';
import { CalculatorTotal } from '../calculator-total';

export const FormController: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    service: {} as Service,
    length: 0,
    width: 0,
    height: 0,
  });
  const { service, length, width, height } = state;

  const onSelectHandler = useCallback(
    (event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
      const id = event.target.value;
      const s = services.find((s) => s.id === id);
      s && dispatch(setService(s));
    },
    []
  );

  const total = getTotal(length, width, height, service.bid);

  return (
    <CalculatorForm>
      <SelectMUI
        label="Виды работ"
        defaultValue={''}
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

      <CalculatorField
        text="1. Длинна (м)"
        value={length}
        dispatch={dispatch}
        handler={setLength}
      />
      <CalculatorField
        text=" 2. Ширина (м)"
        value={width}
        dispatch={dispatch}
        handler={setWidth}
      />
      <CalculatorField
        text="3. Высота (м)"
        value={height}
        dispatch={dispatch}
        handler={setHeight}
      />

      <CalculatorTotal total={total} />
    </CalculatorForm>
  );
};
