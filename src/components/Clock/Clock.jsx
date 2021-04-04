import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  componentDidMount () {
      this.state.interval = setInterval(() => {
      console.log(new Date().toLocaleTimeString())
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { time } = this.state;

    return(
      <p>Current time: {time}</p>
    )
  }
}
