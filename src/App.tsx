import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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
  public currentDate: NodeJS.Timeout | null = null;

  public timerId: number | null = null;

  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount(): void {
    this.startTimers();

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount(): void {
    this.clearTimers();
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
  }

  startTimers = () => {
    this.currentDate = setInterval(() => this.tick(), 1000);
    this.timerId = window.setInterval(() => {
      const newName = getRandomName();

      this.setState({ clockName: newName });
    }, 3300);
  };

  clearTimers = () => {
    if (this.currentDate) {
      clearInterval(this.currentDate);
    }

    // if (this.timerId) {
    //   window.clearInterval(this.timerId);
    // }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    this.clearTimers();
  };

  handleClick = () => {
    this.setState(
      {
        hasClock: true,
        today: new Date(),
        // clockName: 'Clock-4900',
      },
      () => {
        this.startTimers();
      },
    );
  };

  tick = () => {
    const curDate = new Date();

    this.setState({
      today: curDate,
    });

    // eslint-disable-next-line no-console
    console.log(curDate.toUTCString().slice(-12, -4));
  };

  render() {
    const { today, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <div className="Clock">
            <Clock name={clockName} hasClock={hasClock} />
            {' time is '}
            <span className="Clock__time">
              {today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
