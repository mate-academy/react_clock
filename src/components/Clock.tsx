import { Component } from 'react';

interface Props {
  name: string
}

interface State {
  today: Date,
  clockName: string,
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
    clockName: this.props.name,
  };

  timerDateId = 0;

  render() {
    const { today, clockName } = this.state;

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
  }
}
