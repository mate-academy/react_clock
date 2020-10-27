import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      let time = new Date();

      time = time.toLocaleTimeString();
      this.setState({ time });

      // eslint-disable-next-line
      console.log(time);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (this.state.time);
  }
}
