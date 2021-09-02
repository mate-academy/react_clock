/* eslint-disable no-console */
import React from 'react';
import './Clock.scss';

interface Props {
  name: number;
}

type State = {
  time: Date;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    time: new Date(),
  };

  timer = setInterval(() => this.tick(), 1000);

  componentDidMount() {
    return this.timer;
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;

    return oldName !== this.props.name
      ? console.log(`Clock was renamed from ${oldName} to ${this.props.name}`)
      : console.log(this.state.time.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="clock">
        <p className="clock__name">
          Clock name:
          {' '}
          {this.props.name}
        </p>
        <p className="clock__watch">
          Current time:
          {' '}
          {this.state.time.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
