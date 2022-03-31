import React from 'react';

export class Clock extends React.Component {
  state = {
    time: 'Loading Clock...',
  };

  timerId?: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <>
        {this.state.time}
      </>
    );
  }
}
