import React, { memo, useCallback } from 'react';

import { InputNumber } from 'shared/ui/input-number';

import { leaveOnlyNumbers } from '../../lib';
import { CalculatorDispatch, FieldAC } from '../../reducer';

import './style.scss';

interface IProps {
  text: string;
  value: number;
  dispatch: CalculatorDispatch;
  handler: FieldAC;
}

export const CalculatorField: React.FC<IProps> = memo(
  ({ text, value, dispatch, handler }) => {
    const changeFieldHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const res = leaveOnlyNumbers(e.target.value);
        dispatch(handler(+res));
      },
      [dispatch, handler]
    );

    return (
      <div className="Calculator__field">
        {text}
        <InputNumber
          value={value ? value : ''}
          onChange={changeFieldHandler}
        ></InputNumber>
      </div>
    );
  }
);
