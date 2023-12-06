import React from 'react';

type ClockType = {
  name: string;
};

export const Clock: React.FC<ClockType> = ({ name }) => (
  <strong className="Clock__name">
    {name}
  </strong>
);
