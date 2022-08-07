import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
  clockName: string,
  date: Date,
};

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

const clockName = getRandomName();

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName,
    date: new Date(),
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });

    this.timerId = window.setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { hasClock, clockName, date } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        {hasClock && <Clock clockName={clockName} date={date} />}
      </div>
    );
  }
}
