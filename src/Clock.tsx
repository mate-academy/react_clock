import React from 'react';

export class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 1000);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.time);

    return (
      <div className="Clock">
        {this.state.time}
      </div>
    );
  }
}
