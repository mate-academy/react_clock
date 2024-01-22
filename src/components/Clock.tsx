import React from 'react';

interface Props {
  date: Date;
  clockName: string;
}

interface State {
  value: string;
}

export class Clock extends React.PureComponent<Props, State> {
  // state: State = {
  //   value: 'str',
  // };

  render(): React.ReactNode {
    const { date, clockName } = this.props;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {clockName}
          </strong>

          {' time is '}

          <span className="Clock__time">
            {date.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
