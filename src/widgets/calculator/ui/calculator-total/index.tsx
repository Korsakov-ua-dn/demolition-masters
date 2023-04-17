import React, { memo } from 'react';

import './style.scss';

interface IProps {
  total: number | undefined;
}

export const CalculatorTotal: React.FC<IProps> = memo(({ total }) => {
  return (
    <div className="Calculator__total">
      Ориентировочная стоимость работ{' '}
      <strong>
        от&nbsp;
        {total ? total : '___'}&nbsp;руб.
      </strong>
    </div>
  );
});
