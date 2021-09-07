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

  timer: number | undefined;

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.tick();
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(prevProps: Props) {
    const oldName = prevProps.name;

    if (oldName !== this.props.name) {
      console.log(`Clock was renamed from ${oldName} to ${this.props.name}`);
    }
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
          {`Clock name: ${this.props.name}`}
        </p>
        <p className="clock__watch">
          {`Current time: ${this.state.time.toLocaleTimeString()}`}
        </p>
      </div>
    );
  }
}
