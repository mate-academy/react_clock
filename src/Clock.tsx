import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    timerId: setInterval(() => { }, 1000),
  };

  componentDidMount() {
    this.state.timerId = setInterval(() => {
      const today: Date = new Date();
      // eslint-disable-next-line
      console.log(today.toLocaleTimeString());
      this.setState({
        time: today.toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>Current time:</h2>
        <h2>{this.state.time}</h2>
      </>
    );
  }
}
