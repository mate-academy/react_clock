import React from 'react';

type Props = {
  clockName: string,
  clockDate: Date;
};

export const Clock: React.FC<Props> = ({ clockName, clockDate }) => (
  <div className="Clock">
    <strong className="Clock__name">
      {clockName}
    </strong>
    {' time is '}
    <span className="Clock__time">
      {clockDate.toUTCString().slice(-12, -4)}
    </span>
  </div>
);
