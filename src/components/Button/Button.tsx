import React from 'react';

import './Button.scss';

type Props = {
  buttonName: string;
  action: () => void;
};

export const Button: React.FC<Props> = ({ buttonName, action }) => (
  <button
    type="button"
    className="buttonClock"
    onClick={action}
  >
    {buttonName}
  </button>
);
