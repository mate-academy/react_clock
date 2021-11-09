import React from 'react';
import './Clock.scss';

interface Props {
  clockName: number
}

interface State {
  date: Date
}

export class Clock extends React.Component<Props, State> {
  timeId: NodeJS.Timeout | undefined;

  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate(previousProps: Props) {
    const [oldClockName, newClockName] = [previousProps.clockName, this.props.clockName];

    if (oldClockName !== newClockName) {
      // eslint-disable-next-line no-console
      console.log(`The clock was renamed from ${oldClockName} to ${newClockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
  }

  tick() {
    this.timeId = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line no-console
      console.log(this.state.date.toLocaleTimeString());
    }, 1000);
  }

  render() {
    return (
      <p className="clock-text">
        {`Current time: ${this.state.date.toLocaleTimeString()}`}
      </p>
    );
  }
}
