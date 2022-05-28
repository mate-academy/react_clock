import React from 'react';
import './Clock.scss';

type Props = {
  isClockVisible: boolean;
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(
        `The Clock was renamed from ${prevProps.name} to ${this.props.name}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.props.isClockVisible) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { name } = this.props;
    const { time } = this.state;

    return (
      <div className="App__clock clock">
        <h1 className="clock__name">{name}</h1>
        <p className="clock__time" data-cy="time">
          <span className="clock__time-text">
            {'Current time: '}
          </span>
          <span className="clock__time-time">
            {time}
          </span>
        </p>
      </div>
    );
  }
}
