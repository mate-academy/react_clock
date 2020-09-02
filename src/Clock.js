import React from 'react';
import './Clock.scss';

export class Clock extends React.Component {
state = {
  time: new Date().toLocaleTimeString(),
}

componentDidMount() {
  setInterval(() => {
    const update = new Date().toLocaleTimeString();

    this.setState({ time: update });

    // eslint-disable-next-line
      console.log(this.state.time);
  }, 1000);
}

render() {
  const { time } = this.state;

  return (
    <div className="Clock">
      <h1>React clock</h1>
      <p>
        Current time:
        {' '}
        { time }
      </p>
    </div>
  );
}
}
