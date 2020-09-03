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
      <div className="clock">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
