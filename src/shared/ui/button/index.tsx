import { memo } from 'react';

import './style.scss';

type Props = JSX.IntrinsicElements['button'] & {
  className?: string;
};

export const Button: React.FC<Props> = memo(({ className, ...restProps }) => {
  const props = {
    ...restProps,
    className: `Button ${className ? 'Button_' + className : ''}`,
  };

  return <button {...props} />;
});
