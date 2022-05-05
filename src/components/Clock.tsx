import React from 'react';
import './Clock.scss';

type Props = {
  clockName: number,
};

type State = {
  time: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    const newName = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName.clockName} to ${newName.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="clock">
        <div className="clock__time" data-cy="time">
          Current time:
          {' '}
          {time}
        </div>
      </div>
    );
  }
}
