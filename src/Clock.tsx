type Props = {
  name: string,
  today: Date,
};

export const Clock = ({ name, today }: Props) => (
  <div className="App">
    <h1>React clock</h1>

    <div className="Clock">
      <strong className="Clock__name">
        {name}
      </strong>

      {' time is '}

      <span className="Clock__time">
        {today.toUTCString().slice(-12, -4)}
      </span>
    </div>
  </div>
);
