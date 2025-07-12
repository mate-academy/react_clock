import React from 'react';

type Props = {
  clockName: string;
  time: Date;
};

export const Clock: React.FC<Props> = ({ clockName, time }) => {
  return (
    <div className="Clock">
      <strong className="Clock__name">{clockName}</strong>
      {' time is '}
      <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
    </div>
  );
};
