import React from 'react';

type Props = {
  clockName: string;
  today: Date;
};

export const Clock: React.FC<Props> = ({ clockName, today }) => {
  return (
    <div className="Clock">
      <strong className="Clock__name">
        {clockName}
      </strong>
      {' time is '}
      <span className="Clock__time">
        {today.toUTCString().slice(-12, -4)}
      </span>
    </div>
  );
};
