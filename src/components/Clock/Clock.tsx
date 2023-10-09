import React, { useEffect, useState } from 'react';

type Props = {
  clockName: string;
};

export const Clock: React.FC<Props> = ({ clockName }) => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const updateTimeId = setInterval(() => {
      const currentDate = new Date();

      setToday(currentDate);

      // eslint-disable-next-line no-console
      console.info(currentDate);
    }, 1000);

    return () => {
      window.clearInterval(updateTimeId);
    };
  }, []);

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
