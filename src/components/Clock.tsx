import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
    timerId: setInterval(() => {}, 0),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <p className="app__timer">
        Current time:
        {' '}
        {date}
      </p>
    );
  }
}
