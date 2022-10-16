import { Component } from 'react';
import './App.scss';
import { Clock } from './component/clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdClockName = 0;

  componentDidMount(): void {
    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', (): void => {
      this.handleClick();
    });

    document.addEventListener('contextmenu', (event: MouseEvent): void => {
      this.handleContextmenu(event);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextmenu);
    window.clearInterval(this.timerIdClockName);
  }

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextmenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const { hasClock, clockName: clockDate } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockDate} />}
      </div>
    );
  }
}
