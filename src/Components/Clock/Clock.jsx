import React from 'react';

export class Clock extends React.Component {
  state = {
    date: undefined,
    interval: undefined,
  }

  componentDidMount() {
    this.state.interval = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.date);
    }, 1000);
  }

  componentDidUpdate(prevState) {
    if (this.props.name.clockName !== prevState.name.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.name.clockName}
      to ${this.props.name.clockName}`);
    }
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
