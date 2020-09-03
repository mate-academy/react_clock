import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
state = {
  time: new Date(),
}

componentDidMount() {
  setInterval(() => {
    const update = new Date();

    this.setState({ time: update });
  }, 1000);
}

render() {
  const { time } = this.state;

  return (
    <div className="clock">
      <h1>React clock</h1>
      <p>
        Current time:
        {' '}
        { time.toLocaleTimeString() }
      </p>
    </div>
  );
}
}
