import React from 'react';

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>React clock</h1>
        <p>
          {`Current time: ${this.state.date.toLocaleTimeString()}`}
        </p>
        {/* eslint-disable-next-line no-console */}
        {console.log(`Current time: ${this.state.date.toLocaleTimeString()}`)}
      </div>
    );
  }
}

export default Clock;
