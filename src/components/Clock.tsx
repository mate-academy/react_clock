import React from 'react';

type State = {
  date: Date,
};

export class Clock extends React.Component<{}, State> {
  timer: NodeJS.Timer = setInterval(() => {}, 1000);

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString())
  }

  render() {
    return (
      <div className="clock">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
