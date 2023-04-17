import { memo } from 'react';

import './style.scss';

type Props = JSX.IntrinsicElements['button'] & {
  className?: string;
  white?: boolean;
};

export const Button: React.FC<Props> = memo(
  ({ className, white, ...restProps }) => {
    const props = {
      ...restProps,
      className: `Button ${className ? 'Button_' + className : ''} ${
        white ? 'Button_white' : ''
      }`,
    };

    return <button {...props} />;
  }
);
