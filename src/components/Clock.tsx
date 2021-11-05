import React from 'react';

interface Props {
  isOn: boolean,
}

type State = {
  date: Date,
  isOn: boolean,
};

export class Clock extends React.Component<Props, State> {
  // timer: NodeJS.Timer = setInterval(() => this.tick(), 1000);
  // timer: NodeJS.Timer = setInterval(() => this.tick(), 1000);
  timer!: NodeJS.Timer;

  state = {
    date: new Date(),
    isOn: this.props.isOn,
  };

  componentDidMount() {
    if (this.state.isOn) {
      this.timer = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    if (!this.state.isOn) {
      clearInterval(this.timer);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        {this.state.date.toLocaleTimeString()}
        {/* {console.log(this.state.date.toLocaleTimeString())} */}
      </div>
    );
  }
}
