import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  timer = setInterval(() => {
    this.setState({
      date: new Date(),
    });
  }, 1000);

  componentDidMount() {
    return this.timer;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // eslint-disable-next-line no-console,max-len
    console.log(this.state.date.toLocaleTimeString());

    const { date } = this.state;

    return (
      <>
        {date.toLocaleTimeString()}
      </>
    );
  }
}
