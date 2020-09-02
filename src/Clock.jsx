import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({
        date: new Date(),
      }), 1000,
    );
  }

  render() {
    return this.state.date.toLocaleTimeString();
  }
}
