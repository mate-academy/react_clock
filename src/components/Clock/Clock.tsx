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
      this.updateTime();
    }, 1000);
  }

  componentDidUpdate(oldName: Props) {
    const newName = this.props;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldName.clockName} to ${newName.clockName}`);
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
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
