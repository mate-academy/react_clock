import React from 'react';

type State = {
  date: Date;
};

class Clock extends React.Component<State> {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    const { date } = this.state;
    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
    this.setState({ date: new Date() });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <p>
        Current time:
        {' '}
        <span>{date.toLocaleTimeString()}</span>
      </p>
    );
  }
}

export default Clock;
