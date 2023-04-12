import React, { memo } from 'react';

import { Popup } from 'shared/ui/popup';

import './style.scss';

interface IProps {
  onClose: () => void;
}

export const Contacts: React.FC<IProps> = memo(({ onClose }) => {
  return (
    <Popup onClose={onClose}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
        recusandae error saepe totam magnam ipsa quis id inventore distinctio,
        similique nulla unde, officiis modi reprehenderit? Voluptatem eos
        consectetur illo assumenda.
      </p>
    </Popup>
  );
});
