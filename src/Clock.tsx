type Props = {
  today: Date;
  clockName: string;
};

export const Clock: React.FC<Props> = ({ today, clockName }) => {
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
