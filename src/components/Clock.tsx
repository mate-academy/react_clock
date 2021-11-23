import React from 'react';

import './Clock.scss';

type State = {
  currentTime: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  timerId: NodeJS.Timer | null = null;

  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateCurrentTime();
      // eslint-disable-next-line no-console
      // console.log(this.state.currentTime);
    }, 1000);
  }

  componentDidUpdate({ clockName: previousClockName }: Props) {
    const { clockName: newClockName } = this.props;

    if (previousClockName !== newClockName) {
      console.log(`The Clock was renamed from ${previousClockName} to ${newClockName}`);
    }
  }

  componentWillUnount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }

  render() {
    const { currentTime } = this.state;

    return <p className="current-time">{currentTime}</p>;
  }
}
