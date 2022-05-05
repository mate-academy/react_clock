import React from 'react';

import './Clock.scss';

type Props = {
  name: string;
};

type State = {
  time: string;
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  timerId?: NodeJS.Timer;

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: string = new Date().toLocaleTimeString();

      this.setState({ time: date });

      // eslint-disable-next-line
      console.log(this.state.time);
    }, 1000);
  }

  componentDidUpdate(prevClockName: Props) {
    if (prevClockName.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevClockName.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const { name } = this.props;

    return (
      <div className="clock">
        <div className="clock__time" data-cy="time">
          {time}
        </div>
        <div className="clock__name">
          {name}
        </div>
      </div>
    );
  }
}
