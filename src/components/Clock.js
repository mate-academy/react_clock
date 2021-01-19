import React, { Component } from 'react';

export default class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const currDate = this.state.date;

    return (
      <p>{currDate.toLocaleTimeString()}</p>
    );
  }
}
