import React, { useState, useEffect } from 'react';

type Props = {
  clockName: string,
};

export const ClockFC: React.FC<Props> = ({
  clockName,
}) => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timeUpdateId = window.setInterval(() => {
      const currentDate = new Date();

      setToday(currentDate);

      // eslint-disable-next-line no-console
      console.info(currentDate.toUTCString().slice(-12, -4));
    }, 1000);

    return () => {
      window.clearInterval(timeUpdateId);
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
