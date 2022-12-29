import { Component } from 'react';

interface Props {
  name: string
}

interface State {
  today: Date
}

export class Clock extends Component<Props, State> {
  state = {
    today: new Date(),
  };

  timerDateId = 0;

  render() {
    const { today } = this.state;
    const clockName = this.props.name;

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
