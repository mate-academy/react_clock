import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean,
  clockName: string,
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isClockVisible: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.disappearClock);
    document.addEventListener('click', this.appearClock);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.disappearClock);
    document.removeEventListener('click', this.appearClock);
  }

  disappearClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ isClockVisible: false });
  };

  appearClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}
