import React from 'react';
import './Clock.scss';

interface ClockState {
  time: Date;
}

interface ClockProps {
  name: number;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  timerId: NodeJS.Timeout | undefined;

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate(previousProps: ClockProps) {
    const oldName = previousProps.name;

    if (oldName !== this.props.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName} to ${this.props.name}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
      // eslint-disable-next-line no-console
      console.log(this.state.time.toLocaleTimeString());
    }, 1000);
  }

  render() {
    const { time } = this.state;

    return (
      <div className="Clock">
        <p className="Clock__body">
          {time.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
