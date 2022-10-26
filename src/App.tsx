import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  date: Date,
  clockName: string,
  timerId: number,
  hasClock: boolean,
};

export class App extends Component<{}, State> {
  state = {
    date: new Date(),
    clockName: 'Clock-0',
    timerId: 0,
    hasClock: true,
  };

  componentDidMount() {
    this.state.timerId = window.setInterval(() => {
      const oldName = this.state.clockName;

      this.setState({ clockName: getRandomName() });

      // eslint-disable-next-line no-console
      console.debug(`Перейменовано з ${oldName} на ${this.state.clockName}`);
    }, 3300);

    window.setInterval(() => {
      this.setState({ date: new Date() });

      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.info(this.state.date);
      }
    }, 1000);

    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);

    document.removeEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    document.removeEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
  }

  render() {
    const { date, clockName, hasClock } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
        </div>

        <Clock
          date={date}
          clockName={clockName}
          hasClock={hasClock}
        />
      </>
    );
  }
}
