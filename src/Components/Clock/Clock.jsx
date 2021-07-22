import React from 'react';

export class Clock extends React.Component {
  state = {
    date: undefined,
  }

  componentDidMount() {
    this.state.interval = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(this.state.date);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date}
        </p>
      </>

    );
  }
}
