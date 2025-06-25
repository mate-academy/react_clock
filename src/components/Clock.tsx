import React from 'react';
import './App.css';

interface ClockProps {
  name: string;
}

interface ClockState {
  date: Date;
}

export default class Clock extends React.Component<ClockProps, ClockState> {
  private timerID: number = 0;

  state: ClockState = { date: new Date() };

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const formattedTime = this.state.date.toUTCString().slice(-12, -4);

    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>
        {' o tempo é '}
        <span className="Clock__time">{formattedTime}</span>
      </div>
    );
  }
}
