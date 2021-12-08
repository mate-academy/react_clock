import React from 'react';

import './Clock.scss';

type State = {
  currentTime: string;
};

type Props = {
  clockName: number;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    currentTime: new Date().toLocaleTimeString(),
  };

  timerId: NodeJS.Timer = setInterval(() => {}, 0);

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.currentTime);
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
    clearInterval(this.timerId);
  }

  updateCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }

  render() {
    const { currentTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <p className="Clock__name">{clockName}</p>
        <div className="Clock__time">{currentTime}</div>
      </div>
    );
  }
}
