import React, { useEffect, useState } from 'react';

type ClockProps = {
  clockName: string
  onUpdateToday: (date: Date) => void;
};

export const ClockFC: React.FC<ClockProps> = ({
  clockName,
  onUpdateToday,
}) => {
  const [today, setToday] = useState(new Date());

  const updatetoday = window.setInterval(() => {
    const newDate = new Date();

    // eslint-disable-next-line no-console
    console.log('today');

    setToday(newDate);

    onUpdateToday(newDate);
  }, 1000);

  useEffect(() => {
    return clearInterval(updatetoday);
  });

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
