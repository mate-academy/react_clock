import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.state.timerID = setInterval(
      () => this.setState({
        date: new Date(),
      }), 1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.state.date.toLocaleTimeString());

    return (
      <>
        {' '}
        {this.state.date.toLocaleTimeString()}
      </>
    );
  }
}
