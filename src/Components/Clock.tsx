import React from 'react';
import './Clock.scss';

type State = {
  time: string;
};

type Props = {
  color: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: 'START',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.color !== this.props.color) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was recolor from ${prevProps.color} to ${this.props.color}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { color } = this.props;

    return (
      <div className="clock">
        <p className="clock__text">Current time:</p>
        <div
          className="clock__timer"
          style={{ color }}
        >
          { time }
        </div>
      </div>

    );
  }
}
