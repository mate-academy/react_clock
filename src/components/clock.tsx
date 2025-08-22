import React from 'react';

type ClockProps = {
  clock: string;
  time: string;
};

export function Clock({ clock, time }: ClockProps) {
  return (
    <div className="Clock">
      <strong className="Clock__name">{clock}</strong>
      {' time is '}
      <span className="Clock__time">{time}</span>
    </div>
  );
}
