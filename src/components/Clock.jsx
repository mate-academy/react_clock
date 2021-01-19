import React from 'react';

class Clock extends React.Component {
  state = {
    dateOut: new Date(),
  };

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState({ dateOut: new Date() });
      // eslint-disable-next-line
       console.log(this.state.dateOut.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <>
        {this.state.dateOut.toLocaleTimeString()}
      </>
    );
  }
}

export default Clock;
