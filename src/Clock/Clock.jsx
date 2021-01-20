import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(`Current time: ${this.state.date.toLocaleTimeString()}`);
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const time = this.state.date.toLocaleTimeString();

    return (
      <div>
        <h1>React clock</h1>
        <p>
          {`Current time: ${time}`}
        </p>
      </div>
    );
  }
}
