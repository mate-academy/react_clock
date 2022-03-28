import React from 'react';

export class Clock extends React.Component {
  state = {
    currentTime: '00:00:00',
    timerId: 0,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      this.state.currentTime = new Date().toLocaleTimeString();

      // eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    this.setState({ timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <p>
        Current time:
        {' '}
        {this.state.currentTime}
      </p>
    );
  }
}
