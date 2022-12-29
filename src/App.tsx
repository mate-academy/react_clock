import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
  currentTime: any, //
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
    currentTime: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.leftClick);

    document.addEventListener('click', this.rightClick);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>) {
    this.timerId = window.setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.leftClick);
    document.removeEventListener('click', this.rightClick);

    window.clearInterval(this.timerId);
  }

  leftClick = (event) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  rightClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const {
      currentTime,
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <div className="Clock">
            <strong className="Clock__name">
              {clockName}
            </strong>

            <span className="Clock__time">
              {`  time is ${currentTime.toUTCString().slice(-12, -4)}`}
            </span>
          </div>
        )}
      </div>
    );
  }
}
