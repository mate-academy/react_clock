import React from 'react';

function currentDate() {
  return new Date().toUTCString().slice(-12, -4);
}

type Props = {
  name: string;
};

type State = {
  time: string;
  hasClock: boolean;
  timerId: NodeJS.Timeout | number;
};

export class Clock extends React.Component<Props, State> {
  intervalId: NodeJS.Timeout | null = null;

  state: State = {
    time: currentDate(),
    hasClock: true,
    timerId: 0,
  };

  componentDidMount = () => {
    const timer = window.setInterval(() => {
      this.setState({ time: currentDate() });
    }, 1000);

    this.setState({ timerId: timer });
  };

  componentDidUpdate = (
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ): void => {
    if (prevState.time !== this.state.time) {
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  };

  componentWillUnmount = () => {
    window.clearInterval(this.state.timerId);
    this.setState({ timerId: 0 });
  };

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
