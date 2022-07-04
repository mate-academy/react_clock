import React from 'react';
import './clock.scss';

interface Props {
  name: number,
}

export class Clock extends React.Component<Props> {
  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date: Date = new Date();

      this.setState({ time: date.toLocaleTimeString() });

      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <p data-cy="time" className="clock">
        Current time:
        {' '}
        <br />
        {this.state.time}
      </p>
    );
  }
}
