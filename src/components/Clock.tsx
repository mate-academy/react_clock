import { Component } from 'react';

type State = {
  time: string;
  timerIdForTime: number;
};

type Props = {
  name: string;
};

function getCurrentTime(): string {
  return new Date().toUTCString().slice(-12, -4);
}

export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    time: getCurrentTime(),
    timerIdForTime: 0,
  };

  timeChangeHandler = () => {
    this.setState({
      time: getCurrentTime(),
    });
  };

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }

    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(getCurrentTime());
    }
  }

  componentDidMount() {
    window.setInterval(this.timeChangeHandler, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerIdForTime);
  }

  render() {
    return (
      <div className="Clock">
        <strong className="Clock__name">{this.props.name}</strong>

        {' time is '}

        <span className="Clock__time">{this.state.time}</span>
      </div>
    );
  }
}
