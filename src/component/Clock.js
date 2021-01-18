import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  };

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      // eslint-disable-next-line
      console.log(this.state.date);
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        { date }
      </>
    );
  }
}

Clock.defaultProps = {
  name: 0,
};
