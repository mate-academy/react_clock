import React from 'react';

export class Clock extends React.Component {
  state = {
    date: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      const date = new Date();

      this.setState({ date: date.toLocaleTimeString() });

      // eslint-disable-next-line no-console
      console.log(date.toLocaleTimeString());
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
          {date}
        </p>
      </>
    );
  }
}
