import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockTimerId = 0;

  randomTimerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightButton);
    document.addEventListener('click', this.handleLeftButton);
    this.clockTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
      // eslint-disable-next-line no-console
      console.log(
        `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}:${String(new Date().getSeconds()).padStart(2, '0')}`,
      );
    }, 1000);

    this.randomTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${this.state.clockName} to ${getRandomName()}`,
      );
    }, 3300);
  }

  componentWillUnmount() {
    window.clearInterval(this.clockTimerId);
    window.clearInterval(this.randomTimerId);
  }

  handleRightButton = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    this.componentWillUnmount();
  };

  handleLeftButton = () => {
    this.setState({ hasClock: true });
    if (!this.state.hasClock) {
      this.componentDidMount();
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
