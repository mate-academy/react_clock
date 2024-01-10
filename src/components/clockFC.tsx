import React, { useEffect, useState } from 'react';

type ClockProps = {
  clockName: string
  // onUpdateToday: (date: Date) => void;
};

export const ClockFC: React.FC<ClockProps> = ({
  clockName,
  // onUpdateToday,
}) => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const updateToday = window.setInterval(() => {
      const newDate = new Date();

      setToday(newDate);

      // eslint-disable-next-line no-console
      console.info(newDate.toUTCString().slice(-12, -4));
      // onUpdateToday(newDate);
    }, 1000);

    return () => clearInterval(updateToday);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
