import React from 'react';
import '../Clock/Clock.css';

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(() => { 
      this.setState(this.state.date = new Date());
    }, 1000);
  };

  render() {
    const {date} = this.state;
    return (
      <>
        <p className="time">
          Current time:
        </p>
        <span>
          {date.toLocaleTimeString()}
        </span>
      </>
    )
  }
}

