import React from 'react';

type Props = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export const Clock: React.FC<Props> = ({ today, clockName, hasClock }) => {
  return (
    <>
      {hasClock && (
        <div className="Clock">
          <strong className="Clock__name">{clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )}
    </>
  );
};
