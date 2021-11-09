import React from 'react';

export class Clock extends React.Component {
  timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <p>
          Current time:
          {' '}
          {date.toLocaleTimeString()}
        </p>
      </>
    );
  }
}
