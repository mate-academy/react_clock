import React from 'react';

import './Clock.scss';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());

    this.setState({
      interval: setInterval(() => {
        this.setState({ date: new Date() });
        // eslint-disable-next-line
        console.log(this.state.date.toLocaleTimeString());
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.interval);
  }

  render() {
    const { date } = this.state;

    return (
      <span className="clock">
        {date.toLocaleTimeString()}
      </span>
    );
  }
}
