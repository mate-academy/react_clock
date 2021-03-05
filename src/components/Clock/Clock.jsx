import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        date: new Date(),
      }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    // eslint-disable-next-line no-console
    console.log(date.toLocaleTimeString());

    return (
      <p>
        {`Current time: ${date.toLocaleTimeString()}`}
      </p>
    );
  }
}
