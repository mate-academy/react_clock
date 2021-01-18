import React from 'react';

export class Clock extends React.Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  }

  timer = setInterval(() => {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
    // eslint-disable-next-line
    console.log(this.state.currentTime);
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <p>
        {'Current time: '}
        {currentTime}
      </p>
    );
  }
}
