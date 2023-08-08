/* eslint-disable no-console */
import React from 'react';

interface State {
  currentTime: string,
  clockName: string,
  isVisible: boolean,
}

export class Clock extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
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
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
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
  }

  getRandomName = (): string => {
    const value = Date.now().toString().slice(-4);

    return `Clock ${value}`;
  };

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  updateTime() {
    const newTime = new Date().toUTCString().slice(-12, -4);

    this.setState(
      {
        currentTime: newTime,
      },
      () => {
        if (this.state.isVisible) {
          console.info(this.state.currentTime);
        }
      },
    );
  }

  updateName() {
    this.setState({
      clockName: this.getRandomName(),
    });
  }

  render() {
    const { isVisible, clockName, currentTime } = this.state;

    return (
      <div className="App">
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
      </div>
    );
  }
}
