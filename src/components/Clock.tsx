import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string;
};

type State = {
  currentTime: string;
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
    if (prevName !== this.props) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.clockName} to ${this.props.clockName}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { currentTime } = this.state;
    // const { clockName } = this.props;

    return (
      <div className="clock">
        <div data-cy="time" className="clock__time">{currentTime}</div>
      </div>
    );
  }
}
