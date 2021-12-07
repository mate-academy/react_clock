import React from 'react';

import './Clock.scss';

type State = {
  currentTime: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer | null = null;

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  componentDidUpdate(prevName: Props) {
    const newName = this.props;

    if (prevName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevName.clockName} to ${newName.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateCurrentTime() {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
    // eslint-disable-next-line no-console
    console.log(this.state.currentTime);
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="clock">
        <span className="clock__time">{currentTime}</span>
      </div>
    );
  }
}
