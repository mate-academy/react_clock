type Props = {
  date: Date,
  clockName: string,
  hasClock: boolean,
};

export const Clock: React.FC<Props> = ({ date, clockName, hasClock }) => (
  <>
    {(hasClock)
      ? (
        <div className="Clock">
          <strong className="Clock__name">
            {clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {date.toUTCString().slice(-12, -4)}
          </span>
        </div>
      )
      : ('No clock')}
  </>
);
