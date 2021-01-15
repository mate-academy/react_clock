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
    const time = this.state.date.toLocaleTimeString();

    return (
      <div>
        <h1>React clock</h1>
        <p>
          {`Current time: ${time}`}
        </p>
        {/* eslint-disable-next-line no-console */}
        {console.log(`Current time: ${time}`)}
      </div>
    );
  }
}

export default Clock;
