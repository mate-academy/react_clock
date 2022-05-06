import { Component } from 'react';
import './Clock.scss';

type State = {
  time: string;
  timerId: NodeJS.Timer;
};

type Props = {
  name: string;
};

export class Clock extends Component<Props, State> {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.name !== prevProps.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <>
        <div data-cy="time" className="timer">{this.state.time}</div>
        <div className="timer-name">{this.props.name}</div>
      </>
    );
  }
}
