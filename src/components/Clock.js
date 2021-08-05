import React from 'react';

export class Clock extends React.Component {
  state = {
    timeNow: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ timeNow: new Date().toLocaleTimeString() });

      console.log(this.state.timeNow);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { timeNow } = this.state;

    return (
      <>
        {timeNow}
      </>
    );
  }
}
