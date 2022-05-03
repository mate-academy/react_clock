import React from 'react';
import './Clock.scss';

type Props = {
  clocksName: number,
};

type State = {
  currentTime: string,
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const newName = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.clocksName} to ${newName.clocksName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    const { clocksName } = this.props;

    return (
      <div className="Clock">
        <h2 className="Clock__name">{`<<< ${clocksName} >>>`}</h2>

        <div data-cy="time" className="Clock__time">{currentTime}</div>
      </div>
    );
  }
}
