import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  consoleTime = setInterval(() => {
    const date = new Date();

    // eslint-disable-next-line
    console.log(date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentDidUpdate(oldProps) {
    if (oldProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldProps.name} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.consoleTime);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}
