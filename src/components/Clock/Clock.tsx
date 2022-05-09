import React from 'react';
import './Clock.scss';

type Props = {
  clockName: string,
};

type State = {
  currentTime: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
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

  componentDidUpdate(prevProps: Props) {
    if (this.props.clockName !== prevProps.clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock" data-cy="time">
        <p className="clock__time">
          {(new Date().toLocaleTimeString())}
        </p>
      </div>
    );
  }
}
