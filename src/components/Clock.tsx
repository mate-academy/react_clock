import React from 'react';
import './Clock.scss';

type State = {
  time: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const newName = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.clockName} to ${newName.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <p className="Clock__random">Random name</p>
        <p className="Clock__name">{clockName}</p>
        <p className="Clock__time">{time}</p>
      </div>
    );
  }
}
