import React from 'react';

export class Clock extends React.Component {
  state = {
    time: '',
  }

  componentDidMount() {
    this.bob = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      this.setState({ time: date });
      // eslint-disable-next-line no-console
      console.log(date);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.bob);
  }

  render() {
    return (
      <span>{this.state.time}</span>
    );
  }
}
