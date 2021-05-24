import React from 'react';

export class Clock extends React.Component {
  state = {
    date: new Date().toLocaleTimeString(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    console.log(
      prevProps.name === this.props.name
      ? this.state.date
      : `The clock was renamed from ${prevProps.name} to ${this.props.name}`
    );
  }

  render() {
    return (
      <span>
        {this.state.date}
      </span>
    );
  }
}
