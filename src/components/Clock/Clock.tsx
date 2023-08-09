/* eslint-disable no-console */
import React from 'react';

interface ClockState {
  currentTime: string,
  clockName: string,
  isVisible: boolean,
}

interface ClockProps {
  name: string;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  state: ClockState = {
    clockName: this.props.name,
    currentTime: new Date().toUTCString().slice(-12, -4),
    isVisible: true,
  };

  timerID: NodeJS.Timeout | null = null;

  nameTimerID: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateTime(), 1000,
    );

    this.nameTimerID = setInterval(
      () => this.updateName(), 3300,
    );

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentDidUpdate(_prevProps: {}, prevState: ClockState) {
    if (
      this.state.isVisible
      && prevState.clockName !== this.state.clockName
    ) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }

    if (
      this.state.isVisible
      && prevState.currentTime !== this.state.currentTime
    ) {
      console.info(this.state.currentTime);
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }

    if (this.nameTimerID) {
      clearInterval(this.nameTimerID);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isVisible: false });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isVisible: true });
  };

  updateTime() {
    const newTime = new Date().toUTCString().slice(-12, -4);

    this.setState({
      currentTime: newTime,
    });
  }

  updateName() {
    this.setState({
      clockName: this.getRandomName(),
    });
  }

  render() {
    const { isVisible, clockName, currentTime } = this.state;

    return (
      <>
        <h1>React clock</h1>
        {isVisible && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            {' time is '}

            <span className="Clock__time">
              {currentTime}
            </span>
          </div>
        )}
      </>

    );
  }
}
