import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  today: Date;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  timerId: ReturnType<typeof setInterval> | undefined;

  nameTimerId: ReturnType<typeof setInterval> | undefined;

  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  handleRightClick = (ev: MouseEvent) => {
    ev.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      const currentTime = new Date();

      this.setState({ today: currentTime });
      const showTime = currentTime.toTimeString().slice(0, 8);

      // eslint-disable-next-line no-console
      console.log(showTime);
    }, 1000);

    this.nameTimerId = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
    clearInterval(this.nameTimerId);
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

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
