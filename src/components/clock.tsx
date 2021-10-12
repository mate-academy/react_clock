import React from 'react'

export class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div className="timer">
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}