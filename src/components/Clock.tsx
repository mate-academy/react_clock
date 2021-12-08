import React from 'react';

export class Clock extends React.Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div>
        {currentTime}
      </div>
    );
  }
}
